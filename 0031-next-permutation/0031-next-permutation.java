class Solution {
    public void reverse(int []nums,int st,int end ){
        int n = nums.length;
       while(st<=end){
        int t= nums[st];
        nums[st]=nums[end];
        nums[end]=t;
        st++;
        end--;
       }
    }
    public void nextPermutation(int[] nums) {
        // 1st step to find a break point 
        int index =-1;
        int n = nums.length;
        for(int i =n-2;i>=0;i--){
            if(nums[i]<nums[i+1]){
                index=i;
                break;
            }
        }
        if(index==-1){
            reverse(nums,0,n-1);
        }else{
        // 2nd step to find a greter numbe than my break point 
        for(int i =n-1;i>index;i--){
            if(nums[i]>nums[index]){
                int t = nums[i];
                nums[i]=nums[index];
                nums[index]=t;
                break;
            }
        }
        reverse(nums,index+1,n-1);
        }
    }
}