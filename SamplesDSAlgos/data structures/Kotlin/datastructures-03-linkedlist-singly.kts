// Linked Lists Single:
// Time Complexity: O(1) for insertion and deletion at the beginning, O(n) for insertion and deletion at the end or in the middle
// Space Complexity: O(n)
class ListNode(var value: Int) {
    var next: ListNode? = null
}

class SinglyLinkedList {
    var head: ListNode? = null

    fun insert(value: Int) {
        val newNode = ListNode(value)
        if (head == null) {
            head = newNode
        } else {
            var current = head
            while (current?.next != null) {
                current = current.next
            }
            current?.next = newNode
        }
    }

    fun delete(value: Int) {
        if (head?.value == value) {
            head = head?.next
            return
        }

        var prev: ListNode? = null
        var current = head

        while (current != null && current.value != value) {
            prev = current
            current = current.next
        }

        if (current != null) {
            prev?.next = current.next
        }
    }

    fun printList() {
        var current = head
        println("Linked List:")
        while (current != null) {
            print("${current.value} -> ")
            current = current.next
        }
        println("null")
    }
}

fun main() {
    val linkedList = SinglyLinkedList()

    // Insert elements
    linkedList.insert(1)
    linkedList.insert(2)
    linkedList.insert(3)

    linkedList.printList()

    // Delete an element
    linkedList.delete(2)

    linkedList.printList()

    // Insert more elements
    linkedList.insert(4)
    linkedList.insert(5)

    linkedList.printList()
}


main()

/*
In this code:

The ListNode class represents a node in the linked list
containing a value and a reference to the next node.
The SinglyLinkedList class represents the singly
linked list with methods to insert and delete elements,
and print the list.
In the main function, a singly linked list is created,
elements are inserted into it, and then the list is printed.
After that, an element is deleted, and the list is printed
again to show the deletion operation.
Finally, more elements are inserted, and the list is printed
once more to demonstrate the insertion operation.
 */