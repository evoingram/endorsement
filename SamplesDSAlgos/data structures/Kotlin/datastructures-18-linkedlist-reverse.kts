// Linked Lists Reverse: O(n) for reversing the list
class ListNode(var value: Int) {
    var next: ListNode? = null
}

fun reverseLinkedList(head: ListNode?): ListNode? {
    var prev: ListNode? = null
    var current = head
    var nextNode: ListNode?

    while (current != null) {
        nextNode = current.next
        current.next = prev
        prev = current
        current = nextNode
    }

    return prev
}

fun printLinkedList(head: ListNode?) {
    var current = head
    while (current != null) {
        print("${current.value} -> ")
        current = current.next
    }
    println("null")
}

fun main() {
    // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
    val head = ListNode(1)
    var current = head
    for (i in 2..5) {
        current.next = ListNode(i)
        current = current.next!!
    }

    println("Original Linked List:")
    printLinkedList(head)

    // Reverse the linked list
    val reversedHead = reverseLinkedList(head)

    println("Reversed Linked List:")
    printLinkedList(reversedHead)
}

main()

/*
In this code:

The ListNode class represents a node in the linked list
containing a value and a reference to the next node.
The reverseLinkedList function takes the head of a
linked list as input and returns the head of
the reversed linked list.
The printLinkedList function prints the
elements of the linked list to the console.
In the main function, a linked list is created
with values from 1 to 5. Then, the original list is
printed, the list is reversed, and the reversed list
is printed to the console. This demonstrates the
correctness of the Reverse Linked List algorithm.
 */