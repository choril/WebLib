const total=document.querySelector(".total")
const tx=document.querySelector("#tx")
const btn=document.querySelector("button")
const item=document.querySelector(".item")
const txt=document.querySelector(".text")
tx.addEventListener("focus",function(){
    total.style.opacity=1
})
tx.addEventListener("blur",function(){
    total.style.opacity=0
})
tx.addEventListener("input",function(){
    wordsNum=tx.value.trim().length
    total.innerHTML=`${wordsNum}/120字`
})
tx.addEventListener("keyup",function(e){
    if(e.key==='Enter'){
        if(tx.value.trim().length>0){
            item.style.display="block"
            txt.innerHTML=`${tx.value}`
        }
        tx.value=""
        total.innerHTML=`0/120字`
    }
})
btn.addEventListener("click",function(){
    item.style.display="block"
    txt.innerHTML=`${tx.value}`
})