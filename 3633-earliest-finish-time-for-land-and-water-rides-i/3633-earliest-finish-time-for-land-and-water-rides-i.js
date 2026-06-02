/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration,
                                  waterStartTime, waterDuration) {

    let ans = Infinity;

    // Check every land-water ride combination
    for (let i = 0; i < landStartTime.length; i++) {
        for (let j = 0; j < waterStartTime.length; j++) {

            // Case 1: Land -> Water
            let landFinish = landStartTime[i] + landDuration[i];
            let finish1 =
                Math.max(landFinish, waterStartTime[j]) + waterDuration[j];

            // Case 2: Water -> Land
            let waterFinish = waterStartTime[j] + waterDuration[j];
            let finish2 =
                Math.max(waterFinish, landStartTime[i]) + landDuration[i];

            // Store the minimum finish time
            ans = Math.min(ans, finish1, finish2);
        }
    }

    return ans;
};