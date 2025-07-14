const getDecimalValue = (head, result = head.val) => {
    while (head.next) {
        result = (result << 1) | head.next.val;
        head = head.next;
    }
    return result;
};