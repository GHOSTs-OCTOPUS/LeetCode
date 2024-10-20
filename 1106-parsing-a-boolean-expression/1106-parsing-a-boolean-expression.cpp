class Solution {
public:
    bool parseBoolExpr(string expression) {
        // Repeatedly simplify the expression by evaluating subexpressions
        while (expression.length() > 1) {
            int start = expression.find_last_of("!&|");
            int end = expression.find(')', start);
            string subExpr = expression.substr(start, end - start + 1);
            char result = evaluateSubExpr(subExpr);
            expression.replace(start, end - start + 1, 1,
                               result);  // Replace with evaluated result
        }
        return expression[0] == 't';
    }

private:
    char evaluateSubExpr(const string& subExpr) {
        // Extract the operator and the enclosed values
        char op = subExpr[0];
        string values = subExpr.substr(2, subExpr.length() - 3);

        // Apply logical operations based on the operator
        if (op == '!') return values[0] == 't' ? 'f' : 't';
        if (op == '&') return values.find('f') != string::npos ? 'f' : 't';
        if (op == '|') return values.find('t') != string::npos ? 't' : 'f';

        return 'f';  // This point should never be reached
    }
};