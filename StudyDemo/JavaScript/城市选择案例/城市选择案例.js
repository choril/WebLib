// 服务器地址：http://hmajax.itheima.net/api/area
// 获取按钮，监测点击行为
const btn=document.querySelector('button')
// 获取输入框，接受省份、地级市名称
const input=document.querySelectorAll('input')
btn.addEventListener('click',function(){
    // 获取地址栏的参数
    let province=input[0].value
    let city=input[1].value
    axios({
        url:'http://hmajax.itheima.net/api/area',
        params:{
            pname:province,
            cname:city
        }
    }).then(res=>{
        // 映射
        let divArea=res.data.list.map(areaName=>`<div class="allCity">${areaName}</div>`)
        document.querySelector('.AllCity').innerHTML=divArea.join('')
    })
})
