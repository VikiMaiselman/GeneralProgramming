def permutations(s):
    if len(s) == 0:
        return ['']
    else:
        perms = []
        for i in range(len(s)):
            print('what to send', s[:i], ",", s[i+1:])
            subperms = permutations(s[:i] + s[i+1:])
            for perm in subperms:
                perms.append(s[i] + perm)
        return perms

# Example usage:
s = "abc"
print("Permutations of", s, "are:", permutations(s))