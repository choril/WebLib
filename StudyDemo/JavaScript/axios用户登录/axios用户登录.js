const unameEle=document.querySelector(".uname")
const pwdEle=document.querySelector(".password")
const btnEle=document.querySelector(".btn-outline-primary")
const alertEle=document.querySelector(".Ale")
const i=document.querySelector(".alert-inner--icon i")
const strong=document.querySelector(".alert-inner--text")
// 登录成功
function AlertMsgSuccess(){
    alertEle.classList.add("alert-success")
    alertEle.style.display="block"
    i.classList.add("fa-check")
    strong.innerHTML=`<strong>登录成功</strong> 您已成功登录系统！祝您使用愉快`
    let id1=setInterval(() => {
        alertEle.classList.remove("alert-success")
        alertEle.style.display="none"
        i.classList.remove("fa-check")
    }, 5000);
}
function AlertMsgError(){
    alertEle.classList.add("alert-danger")
    alertEle.style.display="block"
    i.classList.add("fa-times")
    strong.innerHTML=`<strong>登录失败</strong> 请检查您的用户名或密码，以确保它们准确无误`
    let id2=setInterval(() => {
        alertEle.classList.remove("alert-danger")
        alertEle.style.display="none"
        i.classList.remove("fa-times")
    }, 5000);
}
btnEle.addEventListener("click",function(){
    let Username=unameEle.value
    let Password=pwdEle.value
    console.log(Username,Password)
    if(Username=="admin"&&Password=="123456")
        AlertMsgSuccess()
    else
        AlertMsgError()
})