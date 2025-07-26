const maxSubarrays = (n, conflictingPairs) => {
    for (const pair of conflictingPairs) {
        if (pair[1] < pair[0]) {
            const temp = pair[0];
            pair[0] = pair[1];
            pair[1] = temp;
        }
    }

    conflictingPairs.sort((a, b) => a[1] - b[1]);

    const m = conflictingPairs.length;
    let max1 = 0;
    let max2 = 0;
    let gain = 0;
    let maxGain = 0;
    let totalOccupied = 0;

    for (let i = 0; i < m; i++) {
        const start = conflictingPairs[i][0];
        let base = n + 1 - conflictingPairs[i][1];
        if (i < m - 1) {
            base = conflictingPairs[i + 1][1] - conflictingPairs[i][1];
        }

        if (start > max1) {
            max2 = max1;
            max1 = start;
            gain = 0;
        } else if (start > max2) {
            max2 = start;
        }

        gain += (max1 - max2) * base;
        totalOccupied += max1 * base;

        if (gain > maxGain) {
            maxGain = gain;
        }
    }

    const total = n * (n + 1) / 2;
    return total - totalOccupied + maxGain;
};