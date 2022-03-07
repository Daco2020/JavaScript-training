let arr = [1,2,3]


// old
let a = arr[0]
let b = arr[1]
let c = arr[2]
console.log(a,b,c)
// 1 2 3


// new
let [e, f, g] = arr
console.log(e,f,g)
// 1 2 3


// 스프레드 연산자 - 객체에서도 동일하게 사용가능(요소를 뺄때)
let [h,...rest] = arr
console.log(h,rest) 
// 1 [ 2, 3 ]


// old, concat(배열)
arr2 = [5,6,7,8]
let result = arr.concat(arr2, arr2, [5,6,7,8])
console.log(result)
//[ 1, 2, 3, 5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8 ]


// new, ...
let result2 = [...arr, ...arr2]
console.log(result2)
// [ 1, 2, 3, 5, 6, 7, 8 ]


// -----------------
//어레이에 건너뛰고싶은 부분이 있다면 , 를 이용해 그자리를 비울 수 있다
function getNumber(){
    let array = [1,2,3,4,5,6]
    let [first,,third,forth]=array
    
    return {first,third,forth}
}

console.log(getNumber())

