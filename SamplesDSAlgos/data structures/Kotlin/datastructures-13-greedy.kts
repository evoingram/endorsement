fun coinChange(coins: List<Int>, amount: Int): List<Int>? {
    val sortedCoins = coins.sortedDescending() // Sort coins in descending order
    var remainingAmount = amount
    val result = mutableListOf<Int>()

    for (coin in sortedCoins) {
        while (remainingAmount >= coin) {
            result.add(coin)
            remainingAmount -= coin
        }
    }

    return if (remainingAmount == 0) result else null // If remainingAmount is 0, the change is possible
}

fun main() {
    val coins = listOf(1, 5, 10, 25) // Available coin denominations
    val amount = 47 // Amount for which we need to make change

    val change = coinChange(coins, amount)

    if (change != null) {
        println("Change for $amount cents: $change")
    } else {
        println("Cannot make change for $amount cents with the available coins.")
    }
}


main()

/*
In this example, the coinChange function takes a list of
available coin denominations (coins) and an integer
representing the amount for which we need to make
change (amount). It returns a list of coins that
represent the change for the given amount, or null if
it's not possible to make the change.

The main function demonstrates the use of the coinChange
function with a list of coins [1, 5, 10, 25] and an
amount of 47. It prints the result if change is possible
or a message indicating that change cannot be made
with the available coins.
 */