const checkAll=document.querySelector('#checkAll')
const checkboxes=document.querySelectorAll('.ck')
checkAll.addEventListener('click',function(){
    checkboxes.forEach(checkbox=>{
        checkbox.checked=checkAll.checked
    })
})
for(let i=0;i<checkboxes.length;i++){
    checkboxes[i].addEventListener('click',function(){
        checkAll.checked=document.querySelectorAll('.ck:checked').length===checkboxes.length
    })
}