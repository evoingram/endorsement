# Rotting Oranges
# https://leetcode.com/problems/rotting-oranges/

# In a given grid, each cell can have one of three values:

    # the value 0 representing an empty cell;
    # the value 1 representing a fresh orange;
    # the value 2 representing a rotten orange.

# Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

# Return the minimum number of minutes that must elapse until no cell has a fresh orange.  
# If this is impossible, return -1 instead.

# Input: [[2,1,1],[1,1,0],[0,1,1]]
# Output: 4

# Input: [[2,1,1],[0,1,1],[1,0,1]]
# Output: -1
# Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only 
    # happens 4-directionally.

# Input: [[0,2]]
# Output: 0
# Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

# 1 <= grid.length <= 10
# 1 <= grid[0].length <= 10
# grid[i][j] is only 0, 1, or 2


def rotten_oranges(list):
    pass
    
    # 0 = empty | 1 = fresh | 2 = rotten

    print("list = " + str(list))
    # possible edge case:  if list is not a matrix

    changed = False
    minute_count = 0
    rows = len(list)-1
    if type(list[0]) == type([]):
        columns = len(list[0])-1
    else:
        columns = 0

    if rows == 0 or columns == 0:
        return -1

    # go backwards through grid
    # for each rotten orange
    cell_count = rows * columns
    for x in range(cell_count):
        for row in range(rows, -1, -1):
            for column in range(columns, -1, -1):
                print("row = " + str(row) + "   |   " + "column = " + str(column))
                if list[row][column] == 2:
                    # check up/down/left/right for fresh orange
                    # if found, change fresh to rotten & add 1 to minute count
                    # for row 0 column 0, check up none, down 1  0, left none, right 0  1
                    # for row 0 column 1, check up none, down 1  1, left 0  0, right 0  2
                    # for row 0 column 2, check up none, down 1  2, left 0  1, right none

                    # for row 1 column 0, check up 0  0, down 2  0, left none, right 1  1
                    # for row 1 column 1, check up 0  1, down 2  1, left 1  0, right 1  2
                    # for row 1 column 2, check up 0  2, down 2  2, left 1  1, right none
                    print("current cell = " + str(row) + " " + str(column))
                    try:
                        if list[row - 1]:
                            up_cell = list[row - 1][column]
                            print("up cell, " + str(row-1) + " " + str(column) + " = " + str(up_cell))
                            if up_cell == 1:
                                list[row - 1][column] = 2
                                changed = True
                    except IndexError:
                        continue
                    try:
                        if list[row + 1]:
                            down_cell = list[row + 1][column]
                            print("down cell, " + str(row+1) + " " + str(column) + " = " + str(down_cell))
                            if down_cell == 1:
                                list[row + 1][column] = 2
                                changed = True
                    except IndexError:
                        continue
                    try:
                        if list[column - 1]:
                            left_cell = list[row][column - 1]
                            print("left cell, " + str(row) + " " + str(column-1) + " = " + str(left_cell))
                            if left_cell == 1:
                                list[row][column - 1] = 2
                                changed = True
                    except IndexError:
                        continue
                    try:
                        if list[column + 1]:
                            right_cell = list[row][column + 1]
                            print("right cell, " + str(row) + " " + str(column+1) + " = " + str(right_cell))
                            if right_cell == 1:
                                list[row][column + 1] = 2
                                changed = True
                    except IndexError:
                        continue
        # add to count if something changed
        print("turn = " + str(list))
        if changed == True:
            minute_count += 1
        print("changed = " + str(changed) + "   |   " + "minute count = " + str(minute_count))
        changed = False
        print("-----------------")
    # if not possible, return -1
    if minute_count == 0:
        return -1
    print("minute count = ")
    return minute_count



def oranges_rotting(grid):
    minute_count = 0

    def create_set(grid, target_value):
        result = set()
        for y in range(len(grid)):
            for x in range(len(grid[0])):
                if grid[y][x] == target_value:
                    result.add((x,y))
        return result

    # create a set of rotten & fresh orange locations
    rotten_os = create_set(grid, 2)
    fresh_oranges = create_set(grid, 1)
    
    length_fresh = len(fresh_oranges)

    # For each time interval iteration
    while length_fresh > 0:
        going_bad = set()
        # loop through fresh oranges and create a set going bad
        for x, y in fresh_oranges:
            up_cell = (x - 1, y)
            down_cell = (x + 1, y)
            left_cell = (x, y - 1)
            right_cell = (x, y + 1)
            if up_cell in rotten_os or down_cell in rotten_os or left_cell in rotten_os or right_cell in rotten_os:
                currently_going_bad = (x, y)
                going_bad.add(currently_going_bad)
        
        length_gb = len(going_bad)
        if length_gb == 0:
            return -1

        # remove oranges going bad from fresh and add to rotten
        fresh_oranges.difference_update(going_bad)
        rotten_os.update(going_bad)

        minute_count += 1
        length_fresh = len(fresh_oranges)

    return minute_count
    
# 4
grid = [[2,1,1],[1,1,0],[0,1,1]]
print(oranges_rotting(grid))

# -1
grid = [[2,1,1],[0,1,1],[1,0,1]]
print(oranges_rotting(grid))

# 0
grid = [[0,2]]
print(oranges_rotting(grid))
                
