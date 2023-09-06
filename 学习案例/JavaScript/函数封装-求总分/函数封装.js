function calSum(arry){
    let sum = 0
    for(let i = 0; i < arry.length; i++){
        sum += arry[i]
    }
    return sum
}
let student_score=[[100,20,30,47,90],[28,97,87,64,76],[90,87,67,45,97],[77,33,44,55,88]]
for(let i = 0; i < student_score.length; i++){
    console.log(calSum(student_score[i]))
}
