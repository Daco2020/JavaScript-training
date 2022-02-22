// function meetAt(year, month, date) {
//     let todayYear = year;
//     let todayMonth = month;
//     let todayDate = date;
  
//     if (todayDate) {
//       return `${todayYear}/${todayMonth}/${todayDate}`;
//     }
//     if (todayMonth) {
//       return `${todayYear}년 ${todayMonth}월`;
//     }
//     if (todayYear) {
//       return `${todayYear}년`;
//     }
  
//   }
  
//   console.log(meetAt(2022,1,7))


//----------------
// let a = 1
// // 동적 값은 `${동적값}문자열` 이렇게 지정할 수 있다.
// console.log(`${a}문자열`)


//------------------
let unit
function changeCalculate(money) {
    unit = [50000,10000,5000,1000,500,100]
    for(let i=0;i<unit.length;i++){
    
    let num = Math.floor(money / unit[i]) // Math.floor(계산식) == 소수점 버림
    console.log(unit[i]+" X "+num)
    money = money - (unit[i]*num)
    
    }
}

changeCalculate(12300)