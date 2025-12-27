/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    const count = new Array(n).fill(0);
    const timer = new Array(n).fill(0);

    let itr = 0;

    while (itr < meetings.length) {
        const start = meetings[itr][0];
        const end = meetings[itr][1];
        const dur = end - start;

        let room = -1;
        let earliest = Number.MAX_SAFE_INTEGER;
        let earliestRoom = -1;

        for (let i = 0; i < n; i++) {
            if (timer[i] < earliest) {
                earliest = timer[i];
                earliestRoom = i;
            }
            if (timer[i] <= start) {
                room = i;
                break;
            }
        }

        if (room !== -1) {
            timer[room] = end;
            count[room]++;
        } else {
            timer[earliestRoom] += dur;
            count[earliestRoom]++;
        }

        itr++;
    }

    let max = 0, idx = 0;
    for (let i = 0; i < n; i++) {
        if (count[i] > max) {
            max = count[i];
            idx = i;
        }
    }

    return idx;
};