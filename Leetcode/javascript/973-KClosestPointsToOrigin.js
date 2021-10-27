// Given an array of points where 
// points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, 
// return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is 
// the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. 
// The answer is guaranteed to be unique (except for the order that it is in).

/*
    Example 1:
    Input: points = [[1,3],[-2,2]], k = 1
    Output: [[-2,2]]

    Explanation:
    The distance between (1, 3) and the origin is sqrt(10).
    The distance between (-2, 2) and the origin is sqrt(8).
    Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
    We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
*/

/*
    Example 2:
    Input: points = [[3,3],[5,-1],[-2,4]], k = 2
    Output: [[3,3],[-2,4]]
    
    Explanation: 
    The answer [[-2,4],[3,3]] would also be accepted.
*/

// Constraints: 1 <= k <= points.length <= 104 ||||||| -104 < xi, yi < 104

kClosest1 = (points, k) => {
    let calculatedWithDistances = [];
    let currentEuclidean, kToPoints;
    let euclideanFormula = (x, y) => {
        let edPt1 = (x * x)
        let edPt2 = (y * y)
        let edPt3 = edPt1 + edPt2
        return edPt3
    }
    let checkDistance = (kToPoints, finalArray) => {
        // if length = 0, just push it onto finalArray
        let numberOfCycles = finalArray.length;
        let y = 0;
        if (kToPoints in finalArray) return finalArray;
        if (finalArray.length == 0) finalArray.push(kToPoints);
        // else, push it to sorted point
        else {
            while (numberOfCycles > 0) {
                if (kToPoints.distanceFromOrigin < finalArray[y].distanceFromOrigin) {
                    finalArray.splice(y-1, 0, kToPoints)
                }
                if (y == finalArray.length - 1) finalArray.push(kToPoints)
                numberOfCycles--;
                y++;
            }
        }
        return finalArray;
    }
    for (let x = 0; x < points.length; x++) {
        // for each item in larger array, calculate euclidean distance
        currentEuclidean = euclideanFormula(points[x][0], points[x][1]);
        kToPoints = {
            distanceFromOrigin: currentEuclidean,
            point: points[x]
        };
        calculatedWithDistances = checkDistance(kToPoints, calculatedWithDistances);
    }
    // return finalArray
    let finalPointArray = [];
    calculatedWithDistances.forEach(
        arrayItem => {
            finalPointArray.push(arrayItem.point)
            });
    let trimmedArray = [...new Set(finalPointArray)];
    trimmedArray = trimmedArray.slice(0, k);
    return trimmedArray;
}


kClosest = (points, k) => {
    let result = [];

    for (let [a, b] of points) {
        let distance = Math.sqrt(a ** 2 + b ** 2);
        result.push({ points: [a, b], distance })
    }

    result.sort((a, b) => a.distance - b.distance);

    let index = 0;

    let returnPoints = [];

    while (index < k) {
        returnPoints.push(result[index].points)
        index++
    }

    return returnPoints;
};

console.log('------------------------------------')
console.log(kClosest([[1, 3], [-2, 2]], 1));
console.log('------------------------------------')
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));
console.log('------------------------------------')
console.log(kClosest([[6,10],[-3,3],[-2,5],[0,2]], 3));
console.log('------------------------------------')
console.log(kClosest([[68,97],[34,-84],[60,100],[2,31],[-27,-38],[-73,-74],[-55,-39],[62,91],[62,92],[-57,-67]], 5));
console.log('------------------------------------')