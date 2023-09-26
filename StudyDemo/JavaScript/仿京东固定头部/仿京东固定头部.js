// DOM Obtain Elements
const header=document.querySelector('.header')
const sk=document.querySelector('.sk')
window.addEventListener('scroll',()=>{
    let scroll=document.documentElement.scrollTop
    if(scroll>sk.offsetTop-sk.offsetHeight/2&&scroll<sk.offsetTop+sk.offsetHeight)
        header.style.top='0'
    else
        header.style.top=`-${header.offsetHeight}px`
})