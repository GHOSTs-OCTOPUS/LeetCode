/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(
    arriveAlice, leaveAlice, arriveBob, leaveBob
) {
    const days = [31, 28, 31, 30, 31, 30,
                  31, 31, 30, 31, 30, 31];

    function toDays(date) {
        const month = Number(date.slice(0, 2));
        const day = Number(date.slice(3, 5));
        let total = day;

        for (let i = 0; i < month - 1; i++)
            total += days[i];

        return total;
    }

    const start = Math.max(
        toDays(arriveAlice), toDays(arriveBob)
    );
    const end = Math.min(
        toDays(leaveAlice), toDays(leaveBob)
    );

    if (start > end) return 0;

    let count = 0;
    for (let day = start; day <= end; day++)
        count++;

    return count;
};