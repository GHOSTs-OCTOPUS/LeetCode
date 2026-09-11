var totalNumbers = function(digits) {
    let set = new Set();
    let n = digits.length;

    for(let i = 0; i < n; i++) {
        if(digits[i] === 0) {
            continue;
        }

        for(let j = 0; j < n; j++) {
            if(j === i) {
                continue;
            }

            for(let k = 0; k < n; k++) {
                if(k === i || k === j) {
                    continue;
                }

                if(digits[k] % 2 === 0) {
                    let num = digits[i] * 100
                            + digits[j] * 10
                            + digits[k];

                    set.add(num);
                }
            }
        }
    }

    return set.size;
};