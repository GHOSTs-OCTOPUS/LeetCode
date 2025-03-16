/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    // MAIN IDEA: Guess the minimum possible time to repair all cars until it is minimal, using Binary Search

    let res = Infinity

    // PHASE 1: Define the search range for Binary Search
    // Left (l): minimum possible time (minimum rank * 1 * 1)
    // Right (r): maximum possible time (maximum rank * cars * cars)
    let l = Math.min(...ranks)
    let r = Math.max(...ranks) * cars * cars

    while (l <= r) {
        let guessTime = Math.floor((l + r) / 2)
        
        // Check if guessTime is a valid candidate
        if (isGood(ranks, guessTime, cars)) {
            res = guessTime
            r = guessTime - 1 // Try to find an even smaller valid time
        } else {
            l = guessTime + 1 // Increase time if the current guess is insufficient
        }
    }

    return res
}


function isGood(ranks, max, cars) {
    let count = 0

    // Derived formula from the repair time equation:
    // 1. ranks[i] * x * x <= max  →  (time needed for x cars by a mechanic)
    // 2. x * x <= max / ranks[i] 
    // 3. x <= max / ranks[i]  →  (maximum cars a mechanic can repair within max time)

    for (let i = 0; i < ranks.length; i++) {
        let temp = Math.floor(max / ranks[i])
        count += Math.floor(Math.sqrt(temp))

        // If the total number of repaired cars meets or exceeds the requirement, the GuessTime is valid
        if (count >= cars) return true
    }


    return false
}