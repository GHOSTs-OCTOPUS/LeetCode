/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
const mostBooked = (n, meetings) => {
    const count = Array(n).fill(0);
    const busy = Array(n).fill(0);

    meetings.sort((a, b) => a[0] - b[0]);

    meetings.forEach(([start, end]) => {
        let earliest = Number.MAX_SAFE_INTEGER;
        let roomIndex = -1;
        let assigned = false;

        for (let j = 0; j < n; j++) {
            if (busy[j] < earliest) {
                earliest = busy[j];
                roomIndex = j;
            }

            if (busy[j] <= start) {
                busy[j] = end;
                count[j]++;
                assigned = true;
                break;
            }
        }

        if (!assigned) {
            busy[roomIndex] += (end - start);
            count[roomIndex]++;
        }
    });

    return count.reduce((best, val, i) => val > count[best] ? i : best, 0);
};