class Stack<T> {
    val items: MutableList<T> = mutableListOf()

    fun push(item: T) {
        items.add(item)
    }

    fun pop(): T? {
        return if (!isEmpty()) {
            items.removeAt(items.size - 1)
        } else {
            null
        }
    }

    fun isEmpty(): Boolean {
        return items.isEmpty()
    }

    fun peek(): T? {
        return if (!isEmpty()) {
            items[items.size - 1]
        } else {
            null
        }
    }
}

fun main() {
    val stack = Stack<Int>()

    // Pushing elements onto the stack
    stack.push(1)
    stack.push(2)
    stack.push(3)

    // Printing the stack
    println("Stack after pushing elements: ${stack.items}")

    // Peeking at the top element
    println("Top element of the stack: ${stack.peek()}")

    // Popping elements off the stack
    println("Popped element: ${stack.pop()}")
    println("Popped element: ${stack.pop()}")

    // Printing the stack after popping
    println("Stack after popping elements: ${stack.items}")
}

main()


/*
This code defines a generic stack class with typical stack operations
like push, pop, peek, and checks for emptiness.
In the main function, it demonstrates how to use the stack by pushing
elements onto it, peeking at the top element, popping elements off,
and printing the stack at different stages to verify the behavior.
 */