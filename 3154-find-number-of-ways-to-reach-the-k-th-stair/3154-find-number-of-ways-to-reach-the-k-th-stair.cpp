class Solution {
public:
    long long nCr(int n, int r) {
    r = max(r,n - r); 
    long long ans = 1;

    for(int i = 1; i <= r; i++) {
        ans *= (n - r + i);
        ans /= i;
    }
    return ans;
}
    int waysToReachStair(int k) {
        if(k==0 || k==4) return 2;
        if(k==1 || k==2) return 4;
        int powerOf2 = ceil(log2(k));
        long long num = pow(2, powerOf2);
        long long r = num-k;
        if(r<0 || r>powerOf2+1)
            return 0;
        return nCr(powerOf2+1, r);
    }
};