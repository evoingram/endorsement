
# In Python, a dict key can be any immutable type, including a tuple.

current_cache = {}


def expensive_seq(x, y, z):
    if x <= 0:

        return y + z

    if x > 0:

        prevX1 = x - 1
        prevX2 = x - 2
        prevX3 = x - 3

        nextY1 = y + 1
        nextY2 = y + 2
        nextY3 = y + 3

        nextZ2 = z * 2
        nextZ3 = z * 3

        seq1out = expensive_seq(prevX1, nextY1, z)
        seq2out = expensive_seq(prevX2, nextY2, nextZ2)
        seq3out = expensive_seq(prevX3, nextY3, nextZ3)
        
        total_seq = seq1out + seq2out + seq3out
        print(f"seq1out = {seq1out}   |   seq2out = {seq2out}   |   seq3out = {seq3out}")
        print(f"total_seq = {total_seq}")
        
        w = x / 2
        
        # if it doesn't exist, add to cache
        if w not in current_cache:
            current_cache[w] = total_seq

        
        print(f"current cache[w] = {current_cache[w]}")

        return current_cache[w]



if __name__ == "__main__":
    for i in range(10):
        x = expensive_seq(i*2, i*3, i*4)
        print(f"{i*2} {i*3} {i*4} = {x}")

    print(expensive_seq(150, 400, 800))
