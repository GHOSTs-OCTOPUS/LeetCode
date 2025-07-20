class Node {
    constructor(name) {
        this.name = name;
        this.children = new Map();
        this.signature = "";
    }
}

var deleteDuplicateFolder = function(paths) {
    const root = new Node("");
    for (const path of paths) {
        let node = root;
        for (const folder of path) {
            if (!node.children.has(folder)) {
                node.children.set(folder, new Node(folder));
            }
            node = node.children.get(folder);
        }
    }

    const signatureCount = new Map();

    function dfs(node) {
        if (node.children.size === 0) {
            node.signature = "";
            return "";
        }
        const childSignatures = [];
        const sortedChildren = Array.from(node.children.entries()).sort((a, b) => a[0].localeCompare(b[0]));
        for (const [name, child] of sortedChildren) {
            const childSignature = dfs(child);
            childSignatures.push(`${name}(${childSignature})`);
        }
        node.signature = childSignatures.join("");
        signatureCount.set(node.signature, (signatureCount.get(node.signature) || 0) + 1);
        return node.signature;
    }

    dfs(root);

    const result = [];
    const currentPath = [];

    function dfs2(node) {
        if (node.children.size > 0 && signatureCount.get(node.signature) >= 2) {
            return;
        }
        currentPath.push(node.name);
        result.push([...currentPath]);
        const sortedChildren = Array.from(node.children.entries()).sort((a, b) => a[0].localeCompare(b[0]));
        for (const [name, child] of sortedChildren) {
            dfs2(child);
        }
        currentPath.pop();
    }

    const sortedRootChildren = Array.from(root.children.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [name, child] of sortedRootChildren) {
        dfs2(child);
    }

    return result;
};