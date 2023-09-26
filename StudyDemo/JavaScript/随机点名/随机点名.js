const content=document.querySelector('.box-content')
const btn_begin=document.querySelector('.begin')
const btn_stop=document.querySelector('.stop')
let uname=['李发智','陈杰','朱峰海']
let index=0
//渲染按钮监听
btn_begin.addEventListener('click',function(){
    window.id=setInterval(function(){
        content.innerHTML=uname[index]
        if(index===uname.length-1){
            index=-1
        }
        index++
    },50)
    btn_begin.disabled=true
})
btn_stop.addEventListener('click',function(){
    clearInterval(id)
    btn_begin.disabled=false
    delete_name=content.innerHTML
    for(let i=0;i<uname.length;i++)
        if(uname[i]===delete_name){
            uname.splice(i,1)
            index=0
        }
    if(uname.length===0){
        uname=['李发智','陈杰','朱峰海','韩建梁']
        index=0
    }
})
