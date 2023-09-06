let newMoney=0
let password=prompt("请输入您的密码：")
while(password!=="123456"){
    password=prompt("密码错误，请重新输入：")
}
let order=+prompt("请输入您要进行的操作序号：")
while(true)
{
     if(order===1){
        let money=+prompt("请输入您要充值的金额：")
        if(money>=100){
            if(money%100===0){
                newMoney=money+newMoney
                alert("充值成功，当前余额为"+newMoney+"元")
                order=+prompt("请输入您要进行的操作序号：")
            }
            else{
                alert("充值金额必须为整数")
            }
        }
        else{
            alert("充值金额必须大于等于100")
        }
    }
    else if(order===2){
        // 1. 获取用户输入的金额
        money=+prompt("请输入您要提现的金额：")
        if(money>=100){
            // 6. 判断用户输入的金额是否为整数
            if(money%100===0){
                newMoney=newMoney-money
                alert("提现成功，当前余额为"+newMoney+"元")
                order=+prompt("请输入您要进行的操作序号：")
            }
            else{
                alert("提现金额必须为整数")
            }
        }
        else{
            alert("提现金额必须大于等于100")
        }
    }
    else if(order===3){
        alert("您的账户余额为"+newMoney+"元")
        order=+prompt("请输入您要进行的操作序号：")
    }
    else if(order===4){
        // 4. 退出系统
        break
    }
    else
        order=+prompt("输入错误，请重新输入正确的编号：")
}