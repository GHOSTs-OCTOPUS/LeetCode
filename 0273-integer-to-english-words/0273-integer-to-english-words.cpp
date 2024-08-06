class Solution {
public:
    string helper(int n){
        vector<string> units = {"One", "Two", "Three", "Four", "Five", "Six",   "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};

        vector<string> tens = {"Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};

        string ans = "";

        if(n/100 > 0){
            ans += units[n/100 - 1] + " Hundred";
            n %= 100;

            if(n > 0){
                ans += " ";
            }
        }

        if(n > 0 && n < 20)
            ans =  ans + units[n - 1];
        

        else if(n >= 20){
            ans =  ans +  tens[n/10 - 2];

            if(n%10){
                ans += " " + units[n%10 - 1];
            }
        }

        return ans;
    }


    string numberToWords(int num) {
        if(num == 0){
            return "Zero";
        }

        vector<string> hundreds = {"Thousand", "Million", "Billion"};
        int count = -1;
        string ans = "";

        while(num > 0){
            string curr = helper(num%1000);

            if (!curr.empty()){
                if (!ans.empty()) {
                    ans = curr + " " + (count >= 0 ? hundreds[count] + " " : "") + ans;
            } 
                else {
                    ans = curr + (count >= 0 ? " " + hundreds[count] : "") + ans;
                }
            }
            
            count++;
            num = num/1000;
        }

        return ans;
    }
};