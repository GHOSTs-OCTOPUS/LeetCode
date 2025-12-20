const isUnsorted = (strs, col) => {
    for (let row = 1; row < strs.length; row++)
        if (strs[row][col] < strs[row - 1][col])
            return 1;
    return 0;
};

const minDeletionSize = strs => {
    let res = 0;

    for (let col = 0; col < strs[0].length; col++)
        res += isUnsorted(strs, col);
    
    return res;
};
