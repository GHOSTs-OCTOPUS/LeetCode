/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {

    const n = s.length;

    const queue = [0];

    const visited = new Array(n).fill(false);
    visited[0] = true;

    let front = 0;

    let far = 0;

    while (front < queue.length) {

        const i = queue[front++];

        if (i === n - 1) {
            return true;
        }

        const start = Math.max(i + minJump, far + 1);
        const end = Math.min(i + maxJump, n - 1);

        for (let j = start; j <= end; j++) {

            if (s[j] === '0' && !visited[j]) {
                visited[j] = true;
                queue.push(j);
            }
        }

        far = Math.max(far, end);
    }

    return false;
};