function minCapability(nums, k) {  
    let l = 1, r = 1e9;  
    while (l < r) { let m = (l + r) >> 1, t = 0, i = 0;  
    while (i < nums.length && t < k) t += nums[i] <= m, i += nums[i] <= m ? 2 : 1;  
    t < k ? l = m + 1 : r = m; }  
    return l;  
}