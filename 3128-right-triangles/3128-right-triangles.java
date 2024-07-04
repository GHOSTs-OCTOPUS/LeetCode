class Solution {
    public long numberOfRightTriangles(int[][] grid) {
        int m=grid.length,n=grid[0].length;
        int one[]=new int[m];
        int zero[]=new int[n];
        for(int i=0;i<m;i++)
        {
            int count=0;
            for(int j=0;j<n;j++)
            {
                if(grid[i][j] == 1)
                {
                    count++;
                }
            }
            one[i]=count;
        }
        for(int i=0;i<n;i++)
        {
            int count=0;
            for(int j=0;j<m;j++)
            {
                if(grid[j][i] == 1)
                {
                    count++;
                }
            }
            zero[i]=count;
        }
        long ans=0;
        for(int i=0;i<m;i++)
        {
            for(int j=0;j<n;j++)
            {
                if(grid[i][j] == 1)
                {
                    ans+=((one[i]-1)*(zero[j]-1));
                }
            }
        }
        return ans;
    }
}