const maxRunTime = (n, arr) => {
    arr.sort((a, b) => a - b);
    let sum = arr.reduce((a, c) => a + c, 0);

    while (arr.at(-1) > parseInt(sum / n)) {
        n--;
        sum -= arr.pop();
    }

    return parseInt(sum / n)
};