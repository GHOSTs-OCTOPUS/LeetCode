use std::collections::HashMap;

pub struct Node {
    pub count: usize,
    pub links: HashMap<char, Box<Node>>,
}

impl Node {
    pub fn new() -> Self {
        Node {
            count: 0,
            links: HashMap::new()
        }
    }
}

pub struct Trie {
    root: Node,
}

impl Trie {
    pub fn new() -> Self {
        Trie {
            root: Node::new()
        }
    }

    pub fn add_word(&mut self, word: &str) {
        let mut current = &mut self.root;

        for ch in word.chars() {
            if current.links.get(&ch).is_none() {
                current.links.insert(ch, Box::new(Node::new()));
            }
            let mut node = current.links.get_mut(&ch).unwrap();
            current = node;
            current.count += 1;
        }
    }

    pub fn prefix_count(&self, prefix: &str) -> i32 {
        let mut curr = &self.root;
        for ch in prefix.chars() {
            if curr.links.get(&ch).is_none() {
                return 0
            }
            let node = curr.links.get(&ch).unwrap();
            curr = node;
        }
        curr.count as i32
    }
}

impl Solution {
    pub fn prefix_count(words: Vec<String>, pref: String) -> i32 {
        let mut trie = Trie::new();
        
        for word in words {
            trie.add_word(&word);
        }
        trie.prefix_count(&pref)
    }
}