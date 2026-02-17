/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const result = [];
    
    for (let hour = 0; hour < 12; hour++) {
        
        for (let minute = 0; minute < 60; minute++) {
            
            const countBits = (n) => n.toString(2).split('0').join('').length;
            
            if (countBits(hour) + countBits(minute) === turnedOn) {
                
                const time = hour + ":" + 
                             (minute < 10 ? "0" + minute : minute);
                
                result.push(time);
            }
        }
    }
    
    return result;
};