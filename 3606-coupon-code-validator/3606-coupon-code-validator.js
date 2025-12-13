var validateCoupons = function(code, businessLine, isActive) {
    const e = [], g = [], p = [], r = [];

    for (let i = 0; i < isActive.length; i++) {
        if (!isActive[i]) continue;

        const bl = businessLine[i];
        if (!["electronics","grocery","pharmacy","restaurant"].includes(bl)) continue;
        if (code[i].length === 0) continue;

        let ok = true;
        for (const ch of code[i]) {
            if (!(/[a-zA-Z0-9_]/.test(ch))) { ok = false; break; }
        }
        if (!ok) continue;

        if (bl.startsWith("e")) e.push(code[i]);
        if (bl.startsWith("g")) g.push(code[i]);
        if (bl.startsWith("p")) p.push(code[i]);
        if (bl.startsWith("r")) r.push(code[i]);
    }

    e.sort(); g.sort(); p.sort(); r.sort();
    return [...e, ...g, ...p, ...r];
};