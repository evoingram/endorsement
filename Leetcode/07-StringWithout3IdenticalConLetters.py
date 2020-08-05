# String Without 3 Identical Consecutive Letters

# Write a function solution that, given a string S of N lowercase English letters, returns a string with no instances of three identical consecutive letters, obtained from S by deleting the minimum possible number of letters.

'''
Examples:
Given S = “eedaaad” , the function should return “eedaad” . One occurrence of letter a is deleted.
Given S = “xxxtxxx” , the function should return “xxtxx” . Note that letter x can occur more than three times in the returned string, if the occurrences are not consecutive.
Given S = “uuuuxaaaaxuuu” , the function should return “uuxaaxuu”.
'''

# Write an efficient algorithm for the following assumptions:
    # N is an integer within the range [1..200,000]
    # string S consists only of lowercase letters (a-z)

## time complexity:  O()
## space complexity:  O()

def no_three_consecutive(s):
    pass

# eedaad
print(no_three_consecutive("“eedaaad”"))

# xxtxx
print(no_three_consecutive("xxxtxxx"))

# uuxaaxuu
print(no_three_consecutive("uuuuxaaaaxuuu"))