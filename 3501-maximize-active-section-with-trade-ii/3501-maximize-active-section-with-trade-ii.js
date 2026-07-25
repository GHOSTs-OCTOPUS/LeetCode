/**
 * @param {string} sections_
 * @param {number[][]} queries_
 * @return {number[]}
 */
var maxActiveSectionsAfterTrade = function(sections_, queries_) {
    const totSections = sections_.length;
    let totOnes = 0;
    const zeroGrps = [];
    const lastZeroGrpId = new Int32Array(totSections).fill(-1);

    let idx = 0, grpId = -1;
    // Chunk the string by contiguous identical characters
    while (idx < totSections) {
        const startIdx = idx;
        const c = sections_[startIdx];
        while (idx < totSections && sections_[idx] === c) {
            idx++;
        }
        const sectionLen = idx - startIdx;

        // Record contiguous groups of zeros
        if (c === '0') {
            grpId++;
            zeroGrps.push({ startIdx, len: sectionLen });
        } else {
            totOnes += sectionLen;
        }

        // Map every index to the most recently encountered zero-group ID
        for (let i = startIdx; i < idx; i++) {
            lastZeroGrpId[i] = grpId;
        }
    }

    // No inactive sections available to trade
    if (zeroGrps.length === 0) {
        return new Array(queries_.length).fill(totOnes);
    }

    const totAdjPairs = Math.max(0, zeroGrps.length - 1);
    const maxLog2Step = totAdjPairs === 0 ? 0 : 32 - Math.clz32(totAdjPairs);
    const sparseTbl = new Int32Array(Math.max(1, maxLog2Step) * totAdjPairs);

    const calcTblIdx = (logStep, pairIdx) => logStep * totAdjPairs + pairIdx;

    // Construct a sparse table for O(1) Range Maximum Queries
    if (totAdjPairs > 0) {
        for (let pairIdx = 0; pairIdx < totAdjPairs; pairIdx++) {
            sparseTbl[calcTblIdx(0, pairIdx)] = 
                zeroGrps[pairIdx].len + zeroGrps[pairIdx + 1].len;
        }

        for (let logStep = 1; logStep < maxLog2Step; logStep++) {
            for (let pairIdx = 0; pairIdx + (1 << logStep) <= totAdjPairs; pairIdx++) {
                sparseTbl[calcTblIdx(logStep, pairIdx)] = Math.max(
                    sparseTbl[calcTblIdx(logStep - 1, pairIdx)],
                    sparseTbl[calcTblIdx(logStep - 1, pairIdx + (1 << (logStep - 1)))]
                );
            }
        }
    }

    // Retrieve maximum sum of fully enclosed adjacent zero-groups
    const calcMaxAdjSum = (leftIdx, rightIdx) => {
        if (leftIdx > rightIdx) return 0;

        const rngLen = rightIdx - leftIdx + 1;
        const logStep = 31 - Math.clz32(rngLen);

        return Math.max(
            sparseTbl[calcTblIdx(logStep, leftIdx)],
            sparseTbl[calcTblIdx(logStep, rightIdx - (1 << logStep) + 1)]
        );
    };

    const ans = new Array(queries_.length);
    for (let i = 0; i < queries_.length; i++) {
        const qrStart = queries_[i][0];
        const qrEnd = queries_[i][1];

        const leftGrpId = lastZeroGrpId[qrStart];
        const rightGrpId = lastZeroGrpId[qrEnd];

        const firstFullyEnclosedGrpId = leftGrpId + 1;
        const lastFullyEnclosedGrpId = rightGrpId - (sections_[qrEnd] === '0' ? 1 : 0);

        // Calculate available lengths for zero-groups truncated by query boundaries
        const firstPartialGrpId = leftGrpId === -1 ? -1 :
            (zeroGrps[leftGrpId].len - (qrStart - zeroGrps[leftGrpId].startIdx));
        const lastPartialGrpId = rightGrpId === -1 ? -1 :
            (qrEnd - zeroGrps[rightGrpId].startIdx + 1);

        let maxTotMergedZeros = 0;

        // Case 1: Max sum from pairs entirely inside the query range
        if (firstFullyEnclosedGrpId < lastFullyEnclosedGrpId) {
            maxTotMergedZeros = Math.max(maxTotMergedZeros,
                calcMaxAdjSum(firstFullyEnclosedGrpId, lastFullyEnclosedGrpId - 1));
        }
        // Case 2: Query boundaries truncate two distinct adjacent zero-groups
        if (sections_[qrStart] === '0' && sections_[qrEnd] === '0' && 
            leftGrpId + 1 === rightGrpId) {
            maxTotMergedZeros = Math.max(maxTotMergedZeros, 
                firstPartialGrpId + lastPartialGrpId);
        }
        // Case 3: Left boundary truncates a group, adjacent group is fully enclosed
        if (sections_[qrStart] === '0' && 
            leftGrpId + 1 < rightGrpId + (sections_[qrEnd] === '1' ? 1 : 0)) {
            maxTotMergedZeros = Math.max(maxTotMergedZeros, 
                firstPartialGrpId + zeroGrps[leftGrpId + 1].len);
        }
        // Case 4: Right boundary truncates a group, prior group is fully enclosed
        if (sections_[qrEnd] === '0' && leftGrpId < rightGrpId - 1) {
            maxTotMergedZeros = Math.max(maxTotMergedZeros, 
                lastPartialGrpId + zeroGrps[rightGrpId - 1].len);
        }

        ans[i] = totOnes + maxTotMergedZeros;
    }

    // Process all queries and materialize results into an array
    return ans;
};