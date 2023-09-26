// // 1.for循环鼠标滑入版本
// const activeA=document.querySelectorAll('.tab-nav a')
// const activeLi=document.querySelectorAll('li')
// const activeDiv=document.querySelectorAll('.item')
// for(let i=0;i<activeA.length;i++){
//     activeLi[i].addEventListener('mouseenter',function(){
//         document.querySelector('a.active').classList.remove('active')
//         document.querySelector('.item.active').classList.remove('active')
//         activeA[i].classList.add('active')
//         activeDiv[i].classList.add('active')
//     })
// }
// 2.事件委托点击切换版本
const activeDiv=document.querySelectorAll('.item')
const activeA=document.querySelectorAll('.tab-nav a')
const ul=document.querySelector('.tab-nav ul')
ul.addEventListener('click',function(e){
    let target=e.target
    if(target.tagName==='A'){
        document.querySelector('a.active').classList.remove('active')
        target.classList.add('active')
        document.querySelector('.item.active').classList.remove('active')
        activeDiv[target.dataset.id].classList.add('active')
    }
})
