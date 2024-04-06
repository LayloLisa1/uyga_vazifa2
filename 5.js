function largestEven(nums) {
    let maxEven = -1;
    for (let num of nums) {
        if (num % 2 === 0 && num > maxEven) {
            maxEven = num;
        }
    }
    return maxEven;
}
console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13]));
console.log(largestEven([1, 3, 5, 7])); 
console.log(largestEven([0, 19, 18973623]));
