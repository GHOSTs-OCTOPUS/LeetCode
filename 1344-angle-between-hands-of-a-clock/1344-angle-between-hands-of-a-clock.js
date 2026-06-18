/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
//translated using AI
var angleClock = function(hour, minutes) {
    const hourAngle = (hour % 12) * 30 + minutes * 0.5;
    const minuteAngle = minutes * 6;

    const diff = Math.abs(hourAngle - minuteAngle);

    return Math.min(diff, 360 - diff);
};