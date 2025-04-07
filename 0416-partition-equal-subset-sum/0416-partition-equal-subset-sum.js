var canPartition = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return false;
    
    let target = total / 2;
    possible = new Set([0]);
    
    for (let num of nums) {
        let newPossible = new Set(possible);
        for (let s of possible) {
            if (s + num === target) return true;
            newPossible.add(s + num);
        }
        possible = newPossible;
    }

    return possible.has(target);
};