let age = 300
let answer

if (age == 100){
    answer = "적당하군"
} else if (age < 200){
    answer = "어리군"
} else {
    answer = "늙었군"
}
console.log(answer)
// 늙었군

// ----------------

bool = 0
if (bool){
    console.log(true)
}
console.log(Boolean(0), Boolean(1))
// false true