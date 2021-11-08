/*
Given the coordinates of four points in 2D space p1, p2, p3 and p4, 
    return true if the four points construct a square.

The coordinate of a point p^i is represented as [xi, yi]. 
The input is not given in any order.
A valid square has four equal sides with positive length and four equal angles (90-degree angles).

Example 1:
    Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
    Output: true

Example 2:
    Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
    Output: false

Example 3:
    Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
    Output: true

Constraints:
    p1.length == p2.length == p3.length == p4.length == 2
    -104 <= xi, yi <= 104
*/

let validSquare = (p1, p2, p3, p4) => {
    calculateDistance = (a, b) => {
        // Distance formula: d(P, Q) = √ (x2 − x1)2 + (y2 − y1)2
        let distance1 = a[0] - b[0];
        let distance2 = a[1] - b[1];
        return Math.pow(distance1, 2) + Math.pow(distance2, 2);
    }
    const distances = [
        calculateDistance(p1, p2),
        calculateDistance(p1, p3),
        calculateDistance(p1, p4),
        calculateDistance(p2, p3),
        calculateDistance(p2, p4),
        calculateDistance(p3, p4)
    ];
    
    distances.sort((a, b) => a - b);
    console.log(distances);
    return distances[0] &&
        distances[0] === distances[1] &&
        distances[0] === distances[2] &&
        distances[0] === distances[3] &&
        distances[4] === distances[5];
};