/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {

    function merge(groups, words) {
        let current = groups[groups.length - 1];

        if (current.length === 0) {
            groups[groups.length - 1] = words;
            return;
        }

        let combined = [];

        for (let a of current) {
            for (let b of words) {
                combined.push(a + b);
            }
        }

        groups[groups.length - 1] = combined;
    }

    function dfs(start, end) {
        let groups = [[]];
        let depth = 0;
        let left = 0;

        for (let i = start; i <= end; i++) {

            if (expression[i] === '{') {
                depth++;

                if (depth === 1) {
                    left = i + 1;
                }
            }

            else if (expression[i] === '}') {
                depth--;

                if (depth === 0) {
                    merge(groups, dfs(left, i - 1));
                }
            }

            else if (expression[i] === ',' && depth === 0) {
                groups.push([]);
            }

            else if (depth === 0) {
                merge(groups, [expression[i]]);
            }
        }

        let result = new Set();

        for (let group of groups) {
            for (let word of group) {
                result.add(word);
            }
        }

        return Array.from(result);
    }

    return dfs(0, expression.length - 1).sort();
};