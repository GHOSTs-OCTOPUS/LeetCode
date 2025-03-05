class Solution:
    def coloredCells(self, n: int) -> int:
        res=1

        i=0
        while i<n:
            res=res+(4*i)
            i+=1
            
        return(res)
        