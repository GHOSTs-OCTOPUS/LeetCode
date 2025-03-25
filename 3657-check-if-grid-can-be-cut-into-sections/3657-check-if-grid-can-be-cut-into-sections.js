var checkValidCuts = function(n, rectangles) {
    const check = (intervals) => {
        intervals.sort((a, b) => a[0] - b[0]);
        
        let sections = 0;
        let maxEnd = intervals[0][1];

        for (let [start, end] of intervals) {
            if (maxEnd <= start) {
                sections++;
            }
            maxEnd = Math.max(maxEnd, end);
        }

        return sections >= 2;
    };

    let xIntervals = rectangles.map(rect => [rect[0], rect[2]]);
    let yIntervals = rectangles.map(rect => [rect[1], rect[3]]);

    return check(xIntervals) || check(yIntervals);
};