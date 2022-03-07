arr = [1,2,3,4]

function print(i){
console.log(i)
return 50
}


// 콘솔을 찍히지만 리턴 값은 아니다.
arr.forEach(print) 
// [ 1, 2, 3, 4 ]


arr.forEach(function(i){console.log(i)})
// 1
// 2
// 3
// 4

// 인덱스는 두번째 인자
arr.forEach( (item, idx) => {return item} )
// 1
// 2
// 3
// 4


// map은 값을 반환한다. 가공해서 반환할 수 있다
let result1 = arr.map((item)=>{return item+5}) 
console.log(result1)
// [ 6, 7, 8, 9 ]



let dict = [{name:"a"},{name:"b"},{name:"c"}]


 // 객체에서 원하는 값만 가져올 때, 조건을 지정하면 불린 값으로 반환한다.
let result2 = dict.map((item)=>{return item.name})
console.log(result2)
// [ 'a', 'b', 'c' ]


// 조건이 참인 경우에 해당되는 값을 반환한다. 없다면 빈배열 반환
let result_filter = dict.filter((item) => {return item.name == 'a'} )
console.log(result_filter)
[ { name: 'a' } ]


// 조건의 값을 불린으로 반환한다. 있냐 없냐 물어볼때 사용
let result_some = dict.some((item) => {return item.name == 'a'} )
console.log(result_some)
// true


// 모든 요소의 조건이 참인지 불린으로 반환한다.
let result_every = dict.every((item) => {return item.name == 'a'} )
console.log(result_every)
// false



// 처음으로 찾은 값을 배열없이 하나만 반환. 없다면 undefined 반환
console.log(result_find)
let result_find = dict.find((item) => {return item.name == 'a'} )
// { name: 'a' }


// 조건에 맞는 요소의 인덱스를 반환함. 없다면 -1 반환
let result_findIndex = dict.findIndex((item) => {return item.name == 'a'} )
console.log(result_findIndex)
// 0 




// -------------
// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
let doubleLetter =  names.filter((item) => {
    let splitName = item.split("");
    return splitName.some((letter, index) => letter == splitName[index + 1]);
})

console.log(doubleLetter)