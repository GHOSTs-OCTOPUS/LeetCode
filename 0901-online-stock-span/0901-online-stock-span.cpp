class StockSpanner {
private:
    stack<pair<int,int>> s;
public:

    StockSpanner() {
        
    }
    
    int next(int price) {
        int span = 1;
        while (!s.empty() && s.top().first <= price)
        {
            span += s.top().second;
            s.pop();
        }

        s.push({price, span});

        return span;
    }
};
