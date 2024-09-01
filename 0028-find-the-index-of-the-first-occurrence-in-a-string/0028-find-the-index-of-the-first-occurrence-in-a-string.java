class Solution {
    /** this is the first kmp algorithm */
    public int strStr(String haystack, String needle) {
        int i =0;
        char[] haystackCharArray = haystack.toCharArray();
        char[] needleCharArray = needle.toCharArray();
        for (i = 0; i <= haystackCharArray.length - needleCharArray.length; i++) { 
            boolean match = true;
            for (int j = 0; j < needleCharArray.length; j++) {
                if (haystackCharArray[i + j] != needleCharArray[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return i;
            }
        }
        return -1;
    }
}