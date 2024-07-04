class Solution {
public:
    int reverse(int x) {
        long long ans = 0 ;
        long long cnt = 0 ;
        int a = x ;
        // if( x >= pow(2,31)-1) return 0 ;
        // cout << pow(2,31) -1 << endl ;
        while(a!=0) {
            a/=10;
            cnt++ ;
        }
        long long int i =1 ;
        while(cnt !=0) {
            i*=10;
            cnt-- ;
        }
        i/=10;
        // cout << i << endl ;
        if(x == 0) return 0 ;

        else if(x > 0) {
            
            while(x!= 0 ) {
                long long a = x%10 ;
                ans += (i*a) ;
                x/=10;
                i/=10; 
                // cout << x << " " << i << endl ;
            }
            cout << ans << endl ;
        }
        else{
            if(x == INT_MIN ) return 0 ;
            x = -x;
            while(x!= 0 ) {
                long long a = x%10 ;
                ans += (i*a) ;
                x/=10;
                i/=10; 
            }
            ans =-ans ;
        }
        if(ans>INT_MAX || ans<INT_MIN){
                return 0;
        }
        return ans ;
    }
};