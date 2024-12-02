class Solution {
public:
    int isPrefixOfWord(string sentence, string searchWord) {
        // List to store the words from the sentence
        vector<string> wordsList;
        // String to build the current word
        string currentWord;

        // Iterate through each character in the sentence
        for (char character : sentence) {
            if (character != ' ') {
                // Append the character to the current word
                currentWord += character;
            } else {
                // If we encounter a space, add the current word to the list
                if (!currentWord.empty()) {
                    wordsList.push_back(currentWord);
                    currentWord = "";  // Reset the string
                }
            }
        }
        // Add the last word if the sentence doesn't end with a space
        if (!currentWord.empty()) {
            wordsList.push_back(currentWord);
        }

        // Iterate through the list of words to find the prefix match
        for (int wordIndex = 0; wordIndex < wordsList.size(); ++wordIndex) {
            if (wordsList[wordIndex].length() >= searchWord.length()) {
                bool isMatch = true;
                for (int charIndex = 0; charIndex < searchWord.length();
                     ++charIndex) {
                    if (wordsList[wordIndex][charIndex] !=
                        searchWord[charIndex]) {
                        isMatch = false;
                        break;
                    }
                }
                if (isMatch) {
                    return wordIndex + 1;  // Return 1-based index
                }
            }
        }
        return -1;  // Return -1 if no match is found
    }
};