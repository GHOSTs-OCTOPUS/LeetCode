class Solution:
    def isSubPath(self, head: Optional[ListNode], root: Optional[TreeNode]) -> bool:
        
        self.graph = collections.defaultdict(list)
        self.lst = []
        tmp = head
        while tmp != None:
            self.lst.append(tmp)
            tmp = tmp.next

        def helper(root, parent):
            if not root: return
            if parent != None:
                self.graph[parent].append(root)
                self.graph[root].append(parent)

            helper(root.left, root)
            helper(root.right, root)
        
        helper(root, None)

        self.ans = False
        self.seen = set()


        def dfs(root, depth):
            if depth==len(self.lst):
                self.ans = True
                return
            for v in self.graph[root]:
                if v in self.seen: continue
                if v.val == self.lst[depth].val:
                    self.seen.add(v)
                    dfs(v, depth+1)
                    self.seen.remove(v)
        
        def dfs2(root):
            if not root:
                return
            
            if root.val==head.val:
                self.seen.add(root)
                dfs(root, 1)
                self.seen.remove(root)
            
            dfs2(root.left)
            dfs2(root.right)

        dfs2(root)
        return self.ans