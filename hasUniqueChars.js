// Write your code below
function randomNum(n) {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let num = []
    for (let i = 0; i < n; i++){
        let x = Math.floor(Math.random() * arr.length);
        num.push(arr[x])
        arr.splice(x, 1)  
    }
    return num
}
let lucky = randomNum(5)
console.log(lucky)