# Describe the problem.
# Describe your solution at a high level.
# What caused this issue?
# How would you fix it?
# What's the best possible time / space complexity for this problem?
# How does my implementation compare to ideal time / space complexity? 
# What are some ways in which we could tweak / change my implementation to improve on its time / space complexity 
    # (assuming your implementation doesn't hit the ideal)? 

# problem 1 best O(n)  |  O(1)
               # O(n)  |  O(1)

def problem1_solved(head, k):
    # Write a function that receives as input the head node of a linked list and an integer k. 
    # Your function should remove the kth node from the end of the linked list and return the head node of the updated list. 

    # start both at beginning
    begin_pointer = head
    end_pointer = head
    # if head empty
    if begin_pointer is None or end_pointer is None:
        return head.next

    # set end pointer to next head pointer at k index, one after desired deletion
    for x in range(0, k):
        next_end_pointer = end_pointer.next
        end_pointer = next_end_pointer

    # if end pointer is none, return head.next
    if end_pointer is None:
        next_head = head.next
        return next_head

    while end_pointer.next:
        next_end_pointer = end_pointer.next
        end_pointer = next_end_pointer
        next_begin_pointer = begin_pointer.next
        begin_pointer = next_begin_pointer

    next_next_begin_pointer = begin_pointer.next.next
    begin_pointer.next = next_next_begin_pointer

    return head
# ---------------------------------------------------------------------------------

# Describe the problem.
# Describe your solution at a high level.
# What caused this issue?
# How would you fix it?
# What's the best possible time / space complexity for this problem?
# How does my implementation compare to ideal time / space complexity? 
# What are some ways in which we could tweak / change my implementation to improve on its time / space complexity 
    # (assuming your implementation doesn't hit the ideal)? 

# problem 2 best O(n)  |  O(1)
               # O(n)  |  O(1)

def original_solution(string):
    # The string can contain four types of brackets: "[]", "()", "{}", and "||". 
    # Your function should return a boolean indicating whether or not the string is balanced. 
    # Note that pipes brackets use the same character to indicate both opening and closing.  
    # A string is considered balanced if it has as many opening brackets of a given type as it has closing brackets of that same type. 
    # No bracket can be left unmatched if the string is to be considered balanced. 
    # A closing bracket also cannot match a corresponding opening bracket that comes after it. 
    # Brackets also cannot overlap each other, i.e., "[(])". 

    open_b = "["
    close_b = "]"
    open_cb = "{"
    close_cb = "}"
    open_paren = "("
    close_paren = ")"
    open_pipe = "|"
    close_pipe = "|"
    brackets_only = string.lower()
    brackets_only = brackets_only.replace("a", "")
    brackets_only = brackets_only.replace("b", "")
    brackets_only = brackets_only.replace("c", "")
    brackets_only = brackets_only.replace("d", "")
    brackets_only = brackets_only.replace("e", "")
    brackets_only = brackets_only.replace("f", "")
    brackets_only = brackets_only.replace("g", "")
    brackets_only = brackets_only.replace("h", "")
    brackets_only = brackets_only.replace("i", "")
    brackets_only = brackets_only.replace("j", "")
    brackets_only = brackets_only.replace("k", "")
    brackets_only = brackets_only.replace("l", "")
    brackets_only = brackets_only.replace("m", "")
    brackets_only = brackets_only.replace("n", "")
    brackets_only = brackets_only.replace("o", "")
    brackets_only = brackets_only.replace("p", "")
    brackets_only = brackets_only.replace("q", "")
    brackets_only = brackets_only.replace("r", "")
    brackets_only = brackets_only.replace("s", "")
    brackets_only = brackets_only.replace("t", "")
    brackets_only = brackets_only.replace("u", "")
    brackets_only = brackets_only.replace("v", "")
    brackets_only = brackets_only.replace("w", "")
    brackets_only = brackets_only.replace("x", "")
    brackets_only = brackets_only.replace("y", "")
    brackets_only = brackets_only.replace("z", "")
    brackets_only = brackets_only.replace(" ", "")
    brackets_only = brackets_only.replace(",", "")
    brackets_only = brackets_only.replace(".", "")
    brackets_only = brackets_only.replace("-", "")
    brackets_only = brackets_only.replace("…", "")
    # if no brackets return true:
    if open_b not in string and close_b not in string and open_cb not in string and close_cb not in string and open_paren not in string and close_paren not in string:
        return True
    length = len(brackets_only)
    print(length)
    if length == 2:
        print('length is 2')
        if brackets_only[0] == open_b:
            if brackets_only[1] == close_b:
                return True
        elif brackets_only[0] == open_cb:
            if brackets_only[1] == close_cb:
                return True
        elif brackets_only[0] == open_paren:
            if brackets_only[1] == close_paren:
                return True
        elif brackets_only[0] == open_pipe:
            if brackets_only[1] == close_pipe:
                return True
        else:
            return False
    else:
        # go until you find a closing bracket
        for x in range(0, length):
            if brackets_only[x] == close_b or brackets_only[x] == close_cb or brackets_only[x] == close_paren:
                current_bracket = brackets_only[x]
                print(current_bracket)
                # go left - 1 until you find matching bracket
                for y in range(x-1, 0, -1):
                    print(y)
                    previous_bracket = brackets_only[y]
                    print(previous_bracket)
                    # if not found return False
                    if current_bracket == close_b:
                        if previous_bracket != open_b:
                            return False
                    elif current_bracket == close_cb:
                        if previous_bracket != open_cb:
                            return False
                    elif current_bracket == close_paren:
                        if previous_bracket != open_paren:
                            return False
                    elif current_bracket == close_pipe:
                        if brackets_only[x+1] != open_pipe:
                            return False
        # return true if you iterate through whole string
        return True

def problem2_solved(s):
    # The string can contain four types of brackets: "[]", "()", "{}", and "||". 
    # Your function should return a boolean indicating whether or not the string is balanced. 
    # Note that pipes brackets use the same character to indicate both opening and closing.  
    # A string is considered balanced if it has as many opening brackets of a given type as it has closing brackets of that same type. 
    # No bracket can be left unmatched if the string is to be considered balanced. 
    # A closing bracket also cannot match a corresponding opening bracket that comes after it. 
    # Brackets also cannot overlap each other, i.e., "[(])". 
    s = s.lower()
    s = s.replace("/[^a-zA-Z0-9]/g", "")
    s = s.replace(" ", "")
    s = s.replace(",", "")
    s = s.replace(".", "")
    s = s.replace("-", "")
    s = s.replace("…", "")
    while '[]' in s or '{}' in s or '()' or '||' in s:
        s = s.replace("[]","")
        s = s.replace('{}',"")
        s = s.replace("()","")
        s = s.replace("||","")
    if len(s) == 0:
        return True
    return False

# ---------------------------------------------------------------------------------

# Describe the problem.
# Describe your solution at a high level.
# What caused this issue?
# How would you fix it?
# What's the best possible time / space complexity for this problem?
# How does my implementation compare to ideal time / space complexity? 
# What are some ways in which we could tweak / change my implementation to improve on its time / space complexity 
    # (assuming your implementation doesn't hit the ideal)? 

# problem 3 best O(n^2)   |   O(1)
               # O(n^3)   |   O(1)

from operator import itemgetter

def original_problem3(arr, target):
    # function takes in non-empty array of distinct integers & target
    # find all triplets in array that sum up to target sum
    # return 2d array of all triplets
    # each triplet sorted ascending
    # if no such triplets return empty array
    possible_sums = []
    length = len(arr)
    sorted(arr, reverse=False)
    for x in range(0, length):
        for y in range(0, length):
            for z in range(0, length):
                if arr[x] != arr[y] and arr[x] != arr[z] and arr[y] != arr[z]:
                    if arr[x] + arr[y] + arr[z] == target:
                        triplet = sorted([arr[x], arr[y], arr[z]])
                        if triplet not in possible_sums:
                            possible_sums.append(triplet)
    # sort by last element, then second element, then first element
    final_sorted = sorted(possible_sums, key=itemgetter(2))
    final_sorted = sorted(final_sorted, key=itemgetter(1))
    final_sorted = sorted(final_sorted, key=itemgetter(0))
    return final_sorted


def problem3_solved(arr, target):
    # function takes in non-empty array of distinct integers & target
    # find all triplets in array that sum up to target sum
    # return 2d array of all triplets
    # each triplet sorted ascending
    # if no such triplets return empty array

    length = len(arr)
    # sort array elements 
    arr.sort(); 
    final_sorted = []

    for i in range(0, length - 1):  

        # initialize left and right 
        left = i + 1
        right = length - 1
        x = arr[i]
        while (left < right): 
            if (x + arr[left] + arr[right] == target): 

                # print elements if its sum is target. 
                final_sorted = [x, arr[left], arr[right]]
                left = left + 1
                right = right - 1

            # If sum of three elements is less than 'target' then increment in left 
            elif (x + arr[left] + arr[right] < target): 
                left = left + 1

            # if sum is greater than target, then decrement in right side 
            else: 
                right = right - 1
    
    return final_sorted

