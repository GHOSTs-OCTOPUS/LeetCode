import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        List<Integer> result = new ArrayList<>();
        if (s == null || s.length() == 0 || words == null || words.length == 0) {
            return result;
        }
        
        int wordLength = words[0].length();
        int wordCount = words.length;
        int totalLength = wordLength * wordCount;
        
        // Create a frequency map of the words
        Map<String, Integer> wordMap = new HashMap<>();
        for (String word : words) {
            wordMap.put(word, wordMap.getOrDefault(word, 0) + 1);
        }
        
        // We only need to go through wordLength different starting points
        for (int i = 0; i < wordLength; i++) {
            int left = i, right = i, count = 0;
            Map<String, Integer> windowMap = new HashMap<>();
            
            while (right + wordLength <= s.length()) {
                // Get the next word from the right end
                String word = s.substring(right, right + wordLength);
                right += wordLength;
                
                if (wordMap.containsKey(word)) {
                    windowMap.put(word, windowMap.getOrDefault(word, 0) + 1);
                    count++;
                    
                    // If there are more words than needed, slide the window
                    while (windowMap.get(word) > wordMap.get(word)) {
                        String leftWord = s.substring(left, left + wordLength);
                        windowMap.put(leftWord, windowMap.get(leftWord) - 1);
                        left += wordLength;
                        count--;
                    }
                    
                    // If the window contains all the words, we found a valid start
                    if (count == wordCount) {
                        result.add(left);
                    }
                } else {
                    // Reset the window if the word is not in the word list
                    windowMap.clear();
                    count = 0;
                    left = right;
                }
            }
        }
        
        return result;
    }
}