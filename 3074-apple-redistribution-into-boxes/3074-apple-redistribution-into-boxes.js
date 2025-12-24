const minimumBoxes = (apple, cap) => {
    let sum = apple.reduce((a, c) => a + c, 0);    
    cap.sort((a, b) => b - a);
    
    let res = 0;
    while (sum > 0)
        sum -= cap[res++];
    
    return res;
};