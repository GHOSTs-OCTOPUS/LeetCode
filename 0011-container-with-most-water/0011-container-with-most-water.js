/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxarea = 0; 
    while (left < right) { 
        let leftHeight = height[left];
        let rightHeight = height[right];
        let minHeight = Math.min(leftHeight, rightHeight);
        let width = right - left;
        let area = minHeight * width;
        if (maxarea < area) maxarea = area;
        if (leftHeight > rightHeight) {
            right--;
        } else {
            left++;
        }
    }
    return maxarea;
}; 