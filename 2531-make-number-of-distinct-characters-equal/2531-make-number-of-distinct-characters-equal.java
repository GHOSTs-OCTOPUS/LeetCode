class Solution {
    public boolean isItPossible(String word1, String word2) {
        int arr1[] = new int[26];
        int arr2[] = new int[26];

        for(int i=0; i<word1.length(); i++){
            char ch = word1.charAt(i);
            arr1[ch-'a']++;
        }

        for(int i=0; i<word2.length(); i++){
            char ch = word2.charAt(i);
            arr2[ch-'a']++;
        }

        for(int i=0; i<26; i++){
            for(int j=0; j<26; j++){
                if(arr1[i]!=0 && arr2[j]!=0){
                    arr1[i]--;
                    arr2[j]--;
                    
                    arr1[j]++;
                    arr2[i]++;

                    int c1 = 0;
                    int c2 = 0;
                    for(int k=0; k<26; k++){
                        if(arr1[k]!=0) c1++;
                        if(arr2[k]!=0) c2++;
                    }
                    if(c1==c2) return true;

                    arr1[i]++;
                    arr2[j]++;

                    arr1[j]--;
                    arr2[i]--;
                }
            }
        }
        return false;
    }
}