const btn=document.querySelector('.btn')
btn.disabled=true
let time=5
let a=setInterval(function(){
    btn.innerHTML=time===-1?'立即注册':`请仔细阅读用户注册协议[${time}s]`
    time--
    if(time==-2){
        btn.disabled=false
        clearInterval(a)
    }
},1000)
