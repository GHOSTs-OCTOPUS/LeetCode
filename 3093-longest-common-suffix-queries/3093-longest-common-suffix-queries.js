/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function(wordsContainer, wordsQuery) {
    class TrieNode {
        constructor() {
            this.children = new Array(26).fill(null);
            this.bestLen = Infinity;
            this.bestIdx = Infinity;
        }
    }

    const root = new TrieNode();

    for (let i = 0; i < wordsContainer.length; i++) {
        const word = wordsContainer[i];
        const len = word.length;
        let curr = root;

        if (len < curr.bestLen || (len === curr.bestLen && i < curr.bestIdx)) {
            curr.bestLen = len;
            curr.bestIdx = i;
        }

        for (let j = len - 1; j >= 0; j--) {
            const charIdx = word.charCodeAt(j) - 97; // 97 is ASCII for 'a'

            if (curr.children[charIdx] === null) {
                curr.children[charIdx] = new TrieNode();
            }

            curr = curr.children[charIdx];

            if (len < curr.bestLen || (len === curr.bestLen && i < curr.bestIdx)) {
                curr.bestLen = len;
                curr.bestIdx = i;
            }
        }
    }

    const ans = new Array(wordsQuery.length);

    for (let i = 0; i < wordsQuery.length; i++) {
        const query = wordsQuery[i];
        const len = query.length;
        let curr = root;

        for (let j = len - 1; j >= 0; j--) {
            const charIdx = query.charCodeAt(j) - 97;
            if (curr.children[charIdx] === null) {
                break;
            }
            curr = curr.children[charIdx];
        }
        
        ans[i] = curr.bestIdx;
    }

    return ans;
}; 