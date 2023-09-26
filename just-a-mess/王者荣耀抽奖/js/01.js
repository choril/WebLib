// 创建变量
var i=1;
// 创建函数，go为所取函数名
function go(){
	// 生成随机值
	var num=parseInt(Math.random()*14)+1;
	console.log(num);
	// 开启周期性计时器,setInterval里前面是要干什么事可以写个函数，也可以其他。逗号后面是做这个事的时间，且时间单位为毫秒；
	var timer=setInterval(function(){
		num--;
		if(num==0)
		{
			// 停止周期性计时器
			clearInterval(timer);
		}
		// 全灭
		var teams=document.getElementsByClassName('team');
		for(var index of teams)
		{
			index.classList.remove('now');
		}
		// 某一个亮起来，+是加号也可以是拼接，如不同类型相加就是拼接，但拼接后都是‘’类型即字符
		var team=document.getElementById('team'+i);
		// 给某一添加样式
		team.classList.add('now');
		i++;
		if(i>14)
		{
			i=1;
		}
	},10);
}