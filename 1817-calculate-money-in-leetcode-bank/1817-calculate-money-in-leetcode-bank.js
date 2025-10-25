/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = days => {
    const nWeeks = Math.floor(days / 7);
    const rDays = days % 7;
    const ts = n => n * (n + 1) >> 1;

    return ts(days) - 42 * ts(nWeeks - 1) - 6 * nWeeks * rDays;
};
