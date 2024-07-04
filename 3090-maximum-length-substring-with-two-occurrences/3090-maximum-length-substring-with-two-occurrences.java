class Solution {

    public int maximumLengthSubstring(String s) {
        int maxLengthOfSubstring = 0;
        char[] occurrences = new char[26];

        for (int rightPoint = 0, leftPoint = 0; rightPoint < s.length(); rightPoint++) {
            char rightCharacter = s.charAt(rightPoint);
            occurrences[rightCharacter - 'a']++;

            if (occurrences[rightCharacter - 'a'] <= 2) {
                maxLengthOfSubstring = Math.max(maxLengthOfSubstring, rightPoint - leftPoint + 1);
                continue;
            }

            while (occurrences[rightCharacter - 'a'] > 2) {
                occurrences[s.charAt(leftPoint) - 'a']--;
                leftPoint++;
            }
        }

        return maxLengthOfSubstring;
    }
}