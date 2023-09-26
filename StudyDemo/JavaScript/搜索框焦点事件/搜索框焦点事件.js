const searchList=document.querySelector('.result-list')
const inputFocus=document.querySelector('input')
searchList.style.display='none'
inputFocus.addEventListener('focus',()=>{
    searchList.style.display='block'
})
inputFocus.addEventListener('blur',()=>{
    searchList.style.display='none'
})