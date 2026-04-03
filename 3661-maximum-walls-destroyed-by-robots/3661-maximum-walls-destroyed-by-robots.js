/**
 * @param {number[]} robots
 * @param {number[]} distance
 * @param {number[]} walls
 * @return {number}
 */
function maxWalls(robots, distance, walls) {
    const n = robots.length;
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);
    const num = new Array(n).fill(0);
    const robotsToDistance = new Map();

    for (let i = 0; i < n; i++) robotsToDistance.set(robots[i], distance[i]);

    robots.sort((a, b) => a - b);
    walls.sort((a, b) => a - b);

    const lowerBound = (arr, target) => {
        let left = 0,
            right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    };

    const upperBound = (arr, target) => {
        let left = 0,
            right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    };

    for (let i = 0; i < n; i++) {
        const pos1 = upperBound(walls, robots[i]);

        let leftPos;
        if (i >= 1) {
            const leftBound = Math.max(
                robots[i] - robotsToDistance.get(robots[i]),
                robots[i - 1] + 1,
            );
            leftPos = lowerBound(walls, leftBound);
        } else {
            leftPos = lowerBound(
                walls,
                robots[i] - robotsToDistance.get(robots[i]),
            );
        }
        left[i] = pos1 - leftPos;

        let rightPos;
        if (i < n - 1) {
            const rightBound = Math.min(
                robots[i] + robotsToDistance.get(robots[i]),
                robots[i + 1] - 1,
            );
            rightPos = upperBound(walls, rightBound);
        } else {
            rightPos = upperBound(
                walls,
                robots[i] + robotsToDistance.get(robots[i]),
            );
        }
        const pos2 = lowerBound(walls, robots[i]);
        right[i] = rightPos - pos2;

        if (i === 0) continue;

        const pos3 = lowerBound(walls, robots[i - 1]);
        num[i] = pos1 - pos3;
    }

    let subLeft = left[0],
        subRight = right[0];
    for (let i = 1; i < n; i++) {
        const currentLeft = Math.max(
            subLeft + left[i],
            subRight - right[i - 1] + Math.min(left[i] + right[i - 1], num[i]),
        );
        const currentRight = Math.max(subLeft + right[i], subRight + right[i]);
        subLeft = currentLeft;
        subRight = currentRight;
    }

    return Math.max(subLeft, subRight);
}