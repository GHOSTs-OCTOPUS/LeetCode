var putMarbles = function(weights, k) {
    if (k === 1) {
        return 0;
    }

    let pairSums = [];
    for (let i = 0; i < weights.length - 1; i++) {
        pairSums.push(weights[i] + weights[i + 1]);
    }

    pairSums.sort((a, b) => a - b);

    let minScore = 0, maxScore = 0;
    for (let i = 0; i < k - 1; i++) {
        minScore += pairSums[i];
        maxScore += pairSums[pairSums.length - 1 - i];
    }

    return maxScore - minScore;
};