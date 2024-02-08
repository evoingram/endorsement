// Queues:
// Time Complexity: O(1) for enqueue and dequeue operations
// Space Complexity: O(n)
class Queue<T> {
    val items: MutableList<T> = mutableListOf()

    fun enqueue(item: T) {
        items.add(item)
    }

    fun dequeue(): T? {
        return if (!isEmpty()) {
            items.removeAt(0)
        } else {
            null
        }
    }

    fun isEmpty(): Boolean {
        return items.isEmpty()
    }

    fun peek(): T? {
        return if (!isEmpty()) {
            items[0]
        } else {
            null
        }
    }
}

fun main() {
    val queue = Queue<Int>()

    // Enqueueing elements into the queue
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    // Printing the queue
    println("Queue after enqueueing elements: ${queue.items}")

    // Peeking at the front element
    println("Front element of the queue: ${queue.peek()}")

    // Dequeueing elements from the queue
    println("Dequeued element: ${queue.dequeue()}")
    println("Dequeued element: ${queue.dequeue()}")

    // Printing the queue after dequeueing
    println("Queue after dequeueing elements: ${queue.items}")
}


main()

/*
This code defines a generic queue class with typical queue
operations like enqueue, dequeue, peek, and checks for emptiness.
In the main function, it demonstrates how to use the queue by
enqueueing elements into it, peeking at the front element,
dequeueing elements, and printing the queue at different stages
to verify the behavior.
 */