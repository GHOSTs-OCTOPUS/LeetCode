/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort();
    const res = [];
    for (const f of folder) {
        if (res.length === 0) {
            res.push(f);
        } else {
            const prev = res[res.length - 1];
            if (f.startsWith(prev) && f.length > prev.length && f[prev.length] === '/') {
                continue;
            } else {
                res.push(f);
            }
        }
    }
    return res;
};