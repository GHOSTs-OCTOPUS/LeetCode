const maximizeSquareHoleArea = (n, m, hBars, vBars) => {
    hBars.sort((a, b) => a - b);
    vBars.sort((a, b) => a - b);

    const maxSpan = bars => {
        let res = 1;
        let streak = 1;
        for (let i = 1; i < bars.length; i++) {
            if (bars[i] - bars[i - 1] === 1) streak++;
            else streak = 1;
            res = Math.max(res, streak);
        }
        return ++res;
    };

    return Math.min(maxSpan(hBars), maxSpan(vBars)) ** 2;
};

