// let str = '123' + 1
// let int = 123 + 1
// Console >>> 1231 124

// && == and
// || == or

// console.log(20 + 30) 
// console.log("20" + "30") 
// console.log("Hello" + " " + 2021) 
// console.log(1 + 2 * 3)
// console.log((1 + 3) ** 2)
// console.log(1 / 0) // Infinity
// console.log(6 % 2)
// console.log(7.5 % 2)
// console.log(5 == 5) // true
// console.log(5 === 5) // true
// console.log(5 == "5") // true
// console.log(5 === "5") // false
// console.log(5 != 5.0) // false
// console.log(5 !== 5.0) // false
// console.log("true" === true) // false
// console.log(5 <= 5.0) // true
// console.log(5 >= 5) // true
// console.log(true || true) // true 
// console.log(true || false) // true
// console.log(true && true) // true
// console.log(true && false) // true
// console.log(!true) // false
// console.log(!false) // false

let my_list = [1,2,3,4,5,6]
console.log(my_list[2])

// 파이썬과 동일
my_list[2] = 100
console.log(my_list[2])

// 파이썬과 동일
my_list.pop()
console.log(my_list)

// 파이썬의 append
my_list.push(500)
console.log(my_list)

// 리스트 안에 요소가 있는지 불린으로 확인해줌. 파이썬의 in 과 유사
console.log(my_list.includes(500))

// 요소의 인덱스 번호 알려줌. 파이썬의 .index()와 동일
console.log(my_list.indexOf(500))

// 파이썬과 동일하나 , 로 구분 -> 원본은 그대로
console.log(my_list.slice(1,3))
console.log(my_list)

// 시작점 부터 ~ 번째(인덱스x) 만큼 제거 -> slice처럼 인덱스가 아님, 그리고 원본을 수정함
console.log(my_list.splice(1,3))
console.log(my_list)