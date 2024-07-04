class String
    
    def longest_oe_palindrome(pos, d = 0)
        ans, p1, p2 = 0, pos - d, pos
        while p1 >= 0 && p2 < size && self[p1] == self[p2] do
            ans += 1
            p1 -= 1
            p2 += 1
        end
        ans.zero? ? '' : self[pos - d - ans + 1 ... pos + ans]
    end
    
    def longest_palindrome(pos)
        [0, 1].inject('') {|r, d| r.max(longest_oe_palindrome(pos, d)) }
    end

    def max(s) = (size < s.size ? s : self)
end

def longest_palindrome(s)
    s.size.times.inject('') {|r, pos| r.max(s.longest_palindrome(pos)) }
end