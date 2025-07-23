const maximumGain = (s, x, y) => {
    let score = 0;
    let ch1 = 'a', ch2 = 'b';
    let cnt1 = 0, cnt2 = 0;

    if (x < y) {
        const temp = x;
        x = y;
        y = temp;
        ch1 = 'b';
        ch2 = 'a';
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ch1) {
            cnt1++;
        } else if (s[i] === ch2) {
            if (cnt1 > 0) {
                cnt1--;
                score += x;
            } else {
                cnt2++;
            }
        } else {
            score += Math.min(cnt1, cnt2) * y;
            cnt1 = 0;
            cnt2 = 0;
        }
    }

    if (cnt1 !== 0) {
        score += Math.min(cnt1, cnt2) * y;
    }

    return score;
};