var findMedianSortedArrays = function(nums1, nums2) {
 const toltalLength = nums1.length + nums2.length;let x = 0;
let y = 0;
const mergedArr = []
for(let i=0; i< toltalLength;i++){

if(x> nums1.length -1){  nums2.splice(0, y)
     mergedArr.push(...nums2)
      break; }

       if(y> nums2.length -1){
            nums1.splice(0, x)
            mergedArr.push(...nums1)
           break;
       }

       if(nums1[x] > nums2[y]){
           mergedArr.push(nums2[y]);
           y++;
           continue;
       }else{
           mergedArr.push(nums1[x]);
           x++;
           continue;
       }

   }

   if(toltalLength % 2 === 0){
       return (mergedArr[toltalLength/2] +  mergedArr[toltalLength/2 -1]) /2
   }else{
       return mergedArr[(toltalLength-1)/2]
   }

};