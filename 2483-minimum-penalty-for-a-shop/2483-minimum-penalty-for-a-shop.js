const bestClosingTime = customers => {
    let bestTime = 0;
    let minPenalty = 0;
    let prefix = 0;
    
    for (let i = 0; i < customers.length; i++) {
        prefix += customers[i] === 'Y' ? -1 : 1;
        
        if (prefix < minPenalty) {
            bestTime = i + 1;
            minPenalty = prefix;
        }
    }
    
    return bestTime;
};