class Solution {
public:
    void dfs(int node, vector<int> adj[], vector<int>& vis, vector<int>& dis){
        vis[node] = 1;
        for(auto it: adj[node]){
            if(!vis[it]) {
                dis[it] = dis[node] + 1;
                dfs(it, adj, vis, dis);
            }
        }
    }

    int closestMeetingNode(vector<int>& nodes, int node1, int node2) {
        int n = nodes.size();
        vector<int> adj[n];
        
        // Building the graph
        for(int i = 0; i < n; i++) {
            if(nodes[i] != -1)
                adj[i].push_back(nodes[i]);
        }

        vector<int> vis1(n, 0), dis1(n, 0);
        vector<int> vis2(n, 0), dis2(n, 0);

        dfs(node1, adj, vis1, dis1);
        dfs(node2, adj, vis2, dis2);

        int d = 1e9, ans = -1;

        for(int i = 0; i < n; i++) {
            if(vis1[i] && vis2[i]) {
                if(max(dis1[i], dis2[i]) < d) {
                    d = max(dis1[i], dis2[i]);
                    ans = i;
                }
            }
        }

        return ans;
    }
};