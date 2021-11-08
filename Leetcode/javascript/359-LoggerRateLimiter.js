/*

Design a logger system that receives a stream of messages along with their timestamps. 
Each unique message should only be printed at most every 10 seconds 
    (i.e. a message printed at timestamp t will prevent other identical messages 
        from being printed until timestamp t + 10).

All messages will come in chronological order. Several messages may arrive at the same timestamp.

Implement the Logger class:

Logger() Initializes the logger object.
bool shouldPrintMessage(int timestamp, string message) returns true if 
    the message should be printed in the given timestamp, otherwise returns false.
 

Example 1:
Input = ["Logger", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage"]
[[], [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "foo"], [11, "foo"]]
Output = [null, true, true, false, false, false, true]
Explanation
    Logger logger = new Logger();
    logger.shouldPrintMessage(1, "foo");  // return true, next allowed timestamp for "foo" is 1 + 10 = 11
    logger.shouldPrintMessage(2, "bar");  // return true, next allowed timestamp for "bar" is 2 + 10 = 12
    logger.shouldPrintMessage(3, "foo");  // 3 < 11, return false
    logger.shouldPrintMessage(8, "bar");  // 8 < 12, return false
    logger.shouldPrintMessage(10, "foo"); // 10 < 11, return false
    logger.shouldPrintMessage(11, "foo"); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21

Constraints:
    0 <= timestamp <= 109
    Every timestamp will be passed in non-decreasing order (chronological order).
    1 <= message.length <= 30
    At most 104 calls will be made to shouldPrintMessage.
*/

class Logger {
    constructor() {
        this.messageBucket = {};
    }
    shouldPrintMessage = (timestamp, message) => {
        if (this.messageBucket.hasOwnProperty(message)) {
            let latestTimestamp = this.messageBucket[message];
            if (latestTimestamp - timestamp >= 10 || timestamp - latestTimestamp >= 10) {
                this.messageBucket[message] = timestamp;
                console.log(`YES:  Message does exist as property to bucket`);
                return true;
            }
            else {
                console.log(`message not qualified to put into bucket.`);
                return false;
            }
        }
        else {
            console.log(`YES:  Message does exist as property to bucket`);
            this.messageBucket[message] = timestamp;
            return true;
        }
    }
}
class Logger1 {
    constructor(currentTimestamp) {
        // hashset { phrase: timestamp, phrase2: timestamp}
        this.messageBucket = {};
    }

    shouldPrintMessage = (timestamp, message) => {
        if (this.messageBucket.hasOwnProperty(message)) {
                // what is the latest timestamp for that message
                let latestTimestamp = this.messageBucket[message];
                // is that timestamp 10 seconds away from the timestamp?
                    // if yes, then true
                    // else false
                if (latestTimestamp - timestamp >= 10 || timestamp - latestTimestamp >= 10) {
                    console.log(`difference between most recent and current timestamps is 10+.`);
                    console.log(`latest timestamp = ${latestTimestamp} | current timestamp = ${timestamp}`);
                    this.messageBucket[message] = timestamp;
                    return true;
                }
                else {
                    console.log(`message not qualified to put into bucket.`);
                    return false;
                }
        }
        else {
            console.log(`YES:  Message does exist as property to bucket`);
            this.messageBucket[message] = timestamp;
            return true;
        }
    }
}
    /** 
     * Your Logger object will be instantiated and called as such:
     * var obj = new Logger()
     * var param_1 = obj.shouldPrintMessage(timestamp,message)
     */
    let logger = new Logger();
console.log(logger.shouldPrintMessage(1, "foo"));  // return true, next allowed timestamp for "foo" is 1 + 10 = 11
console.log(logger.shouldPrintMessage(2, "bar"));  // return true, next allowed timestamp for "bar" is 2 + 10 = 12
console.log(logger.shouldPrintMessage(3, "foo"));  // 3 < 11, return false
console.log(logger.shouldPrintMessage(8, "bar"));  // 8 < 12, return false
console.log(logger.shouldPrintMessage(10, "foo")); // 10 < 11, return false
console.log(logger.shouldPrintMessage(11, "foo")); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21