/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    // convert the string s to an array
    let arr = [...s];

    // count how many times operation needed
    let cnt = 0;

    // loop until the number becoming 1
    while(arr.length != 1){
        const n = arr.length;
        // if the number is odd
        if(arr[n - 1] === '1'){
            let j = n - 1;
            // consecutive trailing 1s become 0s
            while(j >= 0 && arr[j] === '1'){
                arr[j] = '0';
                j--;
            }
            // if there are at least one '0' in s
            if(j >= 0){
                arr[j] = '1';
            }
            // else, add '1' as the first element of the array
            else{
                arr.unshift('1');
            }
        }
        // if the number is even
        else{
            arr.pop();
        }
        cnt++;
    }
    return cnt;
};