class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        n = len(grid)
        # range of nums is [1, n^2], n^2 total nums
        # expected sum is num terms * (first term + last term) / 2
        missing = (n * n) * (1 + n * n) // 2 # expected sum - actual sum = missing num
        seen = set() # track nums to find duplicate
        duplicate = -1
        for row in grid:
            for num in row:
                if num not in seen:
                    seen.add(num)
                    missing -= num 
                else:
                    duplicate = num
                    
        return [duplicate, missing]