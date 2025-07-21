const makeFancyString = s => {
    let result = '';
    let last = s[0];
    let count = 1;

    result += last;

    for (let i = 1; i < s.length; i++) {
        if (s[i] !== last) {
            last = s[i];
            count = 0;
        }

        if (++count > 2) continue;

        result += s[i];
    }

    return result;
};
