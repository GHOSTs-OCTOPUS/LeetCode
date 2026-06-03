/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    const calculate = (start1, dur1, start2, dur2) => {
        let firstEnd = Infinity;
        for (let i = 0; i < start1.length; i++) {
            firstEnd = Math.min(firstEnd, start1[i] + dur1[i]);
        }
        let ans = Infinity;
        for (let i = 0; i < start2.length; i++) {
            ans = Math.min(ans, Math.max(firstEnd, start2[i]) + dur2[i]);
        }
        return ans;
    };


    const landFirst = calculate(landStartTime, landDuration, waterStartTime, waterDuration);

    const waterFirst = calculate(waterStartTime, waterDuration, landStartTime, landDuration);
    
    return Math.min(landFirst, waterFirst);
};