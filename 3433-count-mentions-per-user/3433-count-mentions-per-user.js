/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function(numberOfUsers, events) {
    const byTime = new Map();
    for (const ev of events) {
        const t = parseInt(ev[1], 10);
        if (!byTime.has(t)) byTime.set(t, []);
        byTime.get(t).push(ev);
    }

    const timestamps = Array.from(byTime.keys()).sort((a,b) => a - b);

    const mentions = Array(numberOfUsers).fill(0);
    const isOnline = Array(numberOfUsers).fill(true);
    const offlineUntil = Array(numberOfUsers).fill(0);

    for (const t of timestamps) {
        const evs = byTime.get(t);

        for (let i = 0; i < numberOfUsers; ++i) {
            if (!isOnline[i] && offlineUntil[i] <= t) {
                isOnline[i] = true;
                offlineUntil[i] = 0;
            }
        }

        for (const ev of evs) {
            if (ev[0] === "OFFLINE") {
                const id = parseInt(ev[2], 10);
                isOnline[id] = false;
                offlineUntil[id] = t + 60;
            }
        }

        for (const ev of evs) {
            if (ev[0] !== "MESSAGE") continue;
            const tokens = ev[2].trim().split(/\s+/);
            for (const token of tokens) {
                if (token === "ALL") {
                    for (let i = 0; i < numberOfUsers; ++i) mentions[i]++;
                } else if (token === "HERE") {
                    for (let i = 0; i < numberOfUsers; ++i) if (isOnline[i]) mentions[i]++;
                } else if (token.startsWith("id")) {
                    const id = parseInt(token.slice(2), 10);
                    if (id >= 0 && id < numberOfUsers) mentions[id]++;
                }
            }
        }
    }

    return mentions;
};