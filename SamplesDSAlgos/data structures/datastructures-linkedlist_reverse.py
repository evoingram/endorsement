
"""

"""
# REVERSE LINKED LIST
# time complexity:   O()
# space complexity:  O()


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head==None or head.next==None:
            return head
        prev=None
        curr = head
        while head.next!=None:
            curr.next = prev
            prev = curr
            curr = curr.next
            head = head.next
        curr.next=prev
        return curr