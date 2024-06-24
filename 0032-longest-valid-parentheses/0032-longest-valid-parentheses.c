#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))

int longestValidParentheses(char* s) {
    int max_length = 0;
    int* stack = (int*)malloc(sizeof(int) * (strlen(s) + 1));
    int top = -1;

    stack[++top] = -1;

    for (int i = 0; s[i] != '\0'; i++) {
        if (s[i] == '(') {
            stack[++top] = i;
        } else {
            top--;
            if (top == -1) {
                stack[++top] = i; 
            } else {
                max_length = MAX(max_length, i - stack[top]);
            }
        }
    }

    free(stack);
    return max_length;
}