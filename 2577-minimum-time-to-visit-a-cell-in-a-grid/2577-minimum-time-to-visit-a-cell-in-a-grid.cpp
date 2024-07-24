class Solution {
public:
    
   
    
    int minimumTime(vector<vector<int>>& grid) {

        //if cell 0,1 and cell 1,0 have >1 values then we cannot move ahed 
        //from 0,0 so no sollution
        if(grid[0][1]>1 && grid[1][0]>1)return -1;

        int n = grid.size();
        int m = grid[0].size();
        
        //visited array we will process each cell atmax once
        vector<vector<int>>vis(n,vector<int>(m));
         
        //using priroirty queue to give us minimum cost cell first
        priority_queue<pair<int,pair<int,int>>>bfs;
        bfs.push({0,{0,0}});
         
        
        while(!bfs.empty()){
            pair<int,pair<int,int>>temp = bfs.top();
            bfs.pop();

            //here x,y are coordinates of current cell
            //tm is the total time to reach till this cell
            int x = temp.second.first;
            int y = temp.second.second;
            int tm = abs(temp.first);
            
            //the first time we get to the last cell we return the time taken
            //we are using Dijkstra algorithm so it will most optimal answer
            //in first go
            if(x == n-1 && y == m-1)return tm;
            
            //we dont process already visited/processed cell
            if(vis[x][y])continue;

            //marking the cell visited/processed
            vis[x][y] = 1;
            
            //now we will try to go to all valid neighbours 

            //move up
            if((x-1)>=0){
                int req = grid[x-1][y] - tm;
                //finding the required time

                if(req<=1)req = max(req,1);
                else {
                    //if time is even we need one extra time 
                    if(req%2==0)req ++;
                }
                //if condition is satisfied to move to the grid cell
                if((tm+req)>= grid[x-1][y] && vis[x-1][y] == 0){
                   
                    bfs.push({-(tm+req),{x-1,y}});
                }
                 
            }
            
            //move down
            if((x+1)<n){
                int req = grid[x+1][y] - tm;
                

                if(req<=1)req = max(req,1);
                else {
                    if(req%2==0)req ++;
                }
                
                if((tm+req)>= grid[x+1][y] && vis[x+1][y] == 0){
                  
                    bfs.push({-(tm+req),{x+1,y}});
                } 
            }
            
            //move up
            if((y-1)>=0){
                 int req = grid[x][y-1] - tm;
                 
                if(req<=1)req = max(req,1);
                else {
                    if(req%2==0)req ++;
                }
                
                if((tm+req)>= grid[x][y-1] && vis[x][y-1] == 0){
                    
                    bfs.push({-(tm+req),{x,y-1}});
                }
            }
            
            //move down
            if((y+1)<m){
                int req = grid[x][y+1] - tm;
                
                if(req<=1)req = max(req,1);
                else {
                    if(req%2==0)req ++;
                }
                
                if((tm+req)>= grid[x][y+1] && vis[x][y+1] == 0){
                    
                    bfs.push({-(tm+req),{x,y+1}});
                }
            }
       
            
        }
        
       return -1;
      
    }
};