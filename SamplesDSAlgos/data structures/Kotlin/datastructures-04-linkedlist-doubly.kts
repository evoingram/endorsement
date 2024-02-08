class ListNode(var value: Int) {
    var prev: ListNode? = null
    var next: ListNode? = null
}

class DoublyLinkedList {
    var head: ListNode? = null
    var tail: ListNode? = null

    fun insert(value: Int) {
        val newNode = ListNode(value)
        if (head == null) {
            head = newNode
            tail = newNode
        } else {
            tail?.next = newNode
            newNode.prev = tail
            tail = newNode
        }
    }

    fun delete(value: Int) {
        var current = head

        while (current != null && current.value != value) {
            current = current.next
        }

        if (current == null) {
            return
        }

        val prevNode = current.prev
        val nextNode = current.next

        if (prevNode != null) {
            prevNode.next = nextNode
        } else {
            head = nextNode
        }

        nextNode?.prev = prevNode

        if (current == tail) {
            tail = prevNode
        }
    }

    fun printList() {
        var current = head
        println("Doubly Linked List (forward):")
        while (current != null) {
            print("${current.value} -> ")
            current = current.next
        }
        println("null")

        current = tail
        println("Doubly Linked List (backward):")
        while (current != null) {
            print("${current.value} -> ")
            current = current.prev
        }
        println("null")
    }
}

fun main() {
    val linkedList = DoublyLinkedList()

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

The ListNode class represents a node in the doubly linked list
containing a value and references to the previous and next nodes.
The DoublyLinkedList class represents the doubly linked list
with methods to insert and delete elements, and
print the list in both forward and backward directions.
In the main function, a doubly linked list is created,
elements are inserted into it, and then the list is printed.
After that, an element is deleted, and the list is printed
again to show the deletion operation. Finally, more elements
are inserted, and the list is printed once more to
demonstrate the insertion operation.
 */