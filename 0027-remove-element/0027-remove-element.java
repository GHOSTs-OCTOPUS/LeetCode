class Solution {
    public int removeElement(int[] nums, int val) {
        int k=0;
        for(int i=0; i<nums.length;i++)
        {
            if(nums[i]==val)
                nums[i]= 51;
            else
            k++;
        }
        Arrays.sort(nums);
        return k;
    }
}