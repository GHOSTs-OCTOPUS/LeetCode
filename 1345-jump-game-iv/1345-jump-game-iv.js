/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {

    const n = arr.length;

    if (n === 1) return 0;

    const map = new Map();

    for (let i = 0; i < n; i++) {

        if (!map.has(arr[i])) {
            map.set(arr[i], []);
        }

        map.get(arr[i]).push(i);
    }

    const queue = [0];

    const visited = new Array(n).fill(false);

    visited[0] = true;

    let steps = 0;

    while (queue.length > 0) {

        let size = queue.length;

        while (size--) {

            const idx = queue.shift();

            if (idx === n - 1) {
                return steps;
            }

            if (idx - 1 >= 0 && !visited[idx - 1]) {
                visited[idx - 1] = true;
                queue.push(idx - 1);
            }

            if (idx + 1 < n && !visited[idx + 1]) {
                visited[idx + 1] = true;
                queue.push(idx + 1);
            }

            for (const nextIdx of map.get(arr[idx])) {

                if (!visited[nextIdx]) {
                    visited[nextIdx] = true;
                    queue.push(nextIdx);
                }
            }

            map.set(arr[idx], []);
        }

        steps++;
    }

    return -1;
};