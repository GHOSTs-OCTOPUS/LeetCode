/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
    meetings.sort((a, b) => a[2] - b[2]);

    const parent = Array.from({ length: n }, (_, i) => i);
    const know = Array(n).fill(false);
    know[0] = know[firstPerson] = true;

    const find = x => parent[x] === x ? x : parent[x] = find(parent[x]);

    const unite = (a, b) => {
        const pa = find(a), pb = find(b);
        if (pa !== pb) parent[pb] = pa;
    };

    for (let i = 0; i < meetings.length; ) {
        const t = meetings[i][2];
        const temp = [];

        let j = i;
        while (j < meetings.length && meetings[j][2] === t) {
            unite(meetings[j][0], meetings[j][1]);
            temp.push(meetings[j][0], meetings[j][1]);
            j++;
        }

        for (const x of temp)
            if (know[x]) know[find(x)] = true;

        for (const x of temp)
            know[x] ||= know[find(x)];

        for (const x of temp)
            parent[x] = x;

        i = j;
    }

    return know.map((v, i) => v ? i : -1).filter(v => v !== -1);
};