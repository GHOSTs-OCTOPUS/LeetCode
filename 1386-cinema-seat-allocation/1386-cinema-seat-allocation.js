/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const rows = new Map();

    for (const [row, seat] of reservedSeats) {
        if (seat === 1 || seat === 10) {
            continue;
        }

        const mask = rows.get(row) || 0;
        rows.set(row, mask | (1 << seat));
    }

    let total = (n - rows.size) * 2;

    let leftMask = 0;
    let middleMask = 0;
    let rightMask = 0;

    for (let seat = 2; seat <= 5; seat++) {
        leftMask |= 1 << seat;
    }

    for (let seat = 4; seat <= 7; seat++) {
        middleMask |= 1 << seat;
    }

    for (let seat = 6; seat <= 9; seat++) {
        rightMask |= 1 << seat;
    }

    for (const mask of rows.values()) {
        const leftFree = (mask & leftMask) === 0;
        const middleFree = (mask & middleMask) === 0;
        const rightFree = (mask & rightMask) === 0;

        if (leftFree && rightFree) {
            total += 2;
        } else if (leftFree || middleFree || rightFree) {
            total += 1;
        }
    }

    return total;
};