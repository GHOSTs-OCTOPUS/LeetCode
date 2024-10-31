class MKAverage {
    multiset<int> low, mid, high;
    int m, k;
    long long midSum;
    int totalElements;
    queue<int> q;

    bool removeFromSet(int num, multiset<int> &s) {
        auto it = s.find(num);
        if(it != s.end()) {
            s.erase(it);
            return true;
        }
        return false;
    }

    void remove(int num) {
        if(removeFromSet(num, low)) {
            int element = *mid.begin();
            mid.erase(mid.find(element));
            midSum -= element;
            low.insert(element);
            element = *high.begin();
            mid.insert(element);
            midSum += element;
            high.erase(high.find(element));
        }
        else if(removeFromSet(num, mid)) {
            midSum -= num;
            int element = *high.begin();
            mid.insert(element);
            midSum += element;
            high.erase(high.find(element));
            return;
        }
        else removeFromSet(num, high);
    }

    void addUtil(int num) {
        low.insert(num);
        if(low.size() > k) {
            int element = *low.rbegin();
            low.erase(low.find(element));
            mid.insert(element);
            midSum += element;
        }
        if(mid.size() > m - 2*k) {
            int element = *mid.rbegin();
            mid.erase(mid.find(element));
            high.insert(element);
            midSum -= element;
        }
    }

public:
    MKAverage(int m, int k) {
        this->m = m;
        this->k = k;
        midSum = 0;
        totalElements = 0;
    }

    
    void addElement(int num) {
        totalElements++;
        if(totalElements > m) {
            int element = q.front();
            q.pop();
            remove(element);
            totalElements--;
        }

        q.push(num);
        addUtil(num);
    }
    
    int calculateMKAverage() {
        if(totalElements < m) return -1;
        return midSum / (m - 2*k);
    }
};

/**
 * Your MKAverage object will be instantiated and called as such:
 * MKAverage* obj = new MKAverage(m, k);
 * obj->addElement(num);
 * int param_2 = obj->calculateMKAverage();
 */