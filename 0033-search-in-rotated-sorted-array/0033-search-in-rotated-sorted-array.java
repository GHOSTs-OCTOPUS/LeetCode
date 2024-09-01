class Solution {
    public int search(int[] nums, int target) {
        
        int pivot = pivotIndex(nums);

        // if you didn't find any pivot that means the array is not rotated
        if(pivot == -1){
            // just do normal binary search 
            return binarySearch(nums, target, 0, nums.length-1);
        }

        // if pivot is found 
        if(nums[pivot] == target){
            return pivot;
        }

        if (target >= nums[0]) {
            return binarySearch(nums, target, 0, pivot - 1);
        }

        return binarySearch(nums, target, pivot + 1, nums.length-1);
    }

    public int binarySearch(int[] arr, int target, int start, int end) {
        while(start <= end) {
            int mid = start + (end-start)/2;

            if(target < arr[mid]){
                end = mid - 1;
            }
            else if (target > arr[mid]){
                start = mid + 1;
            }
            else {
                return mid;
            }
        }
        return -1;
    }

    public int pivotIndex(int[] arr) {
        int start = 0;
        int end = arr.length - 1;

        while(start<= end) {
            int mid = start + (end - start)/2;
            // 1st case
            if (mid < end && arr[mid] > arr[mid + 1]) {
                return mid;
            }
            // second case 
            else if (mid > start && arr[mid] < arr[mid - 1]) {
                return mid - 1;
            }
            // 3rd case
            else if (arr[mid] <= arr[start]) {
                end = mid - 1;
            }
            // 4th case
            else {
                start = mid + 1;
            }
        }
        return -1;
    }
}