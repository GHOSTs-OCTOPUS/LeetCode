class Solution:
    def __init__(self, nums):
        self.array = nums
        self.original = list(nums)

    def reset(self):
        self.array = self.original
        self.original = list(self.original)
        return self.array

    def shuffle(self):
        aux = list(self.array)

        for idx in range(len(self.array)):
            remove_idx = random.randrange(len(aux))
            self.array[idx] = aux.pop(remove_idx)

        return self.array


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()