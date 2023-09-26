const entry=document.querySelector(".xtx_entry")
const elevator=document.querySelector(".xtx-elevator")
const a=document.querySelectorAll(".xtx-elevator .xtx-elevator-list a")
let scroll_Top=null
const elevatorList=document.querySelector(".xtx-elevator-list")
const freshGoods=document.querySelector(".xtx_goods_new")
const popularGoods=document.querySelector(".xtx_goods_popular")
const brandGoods=document.querySelector(".xtx_goods_brand")
const latestTopic=document.querySelector(".xtx_goods_topic")
window.addEventListener("scroll",function(){
    scroll_Top=document.documentElement.scrollTop
    // 滑动至entry区导航栏淡出
    elevator.style.opacity=scroll_Top>=entry.offsetTop?1:0
    // 滚动到对应分区导航栏常绿提示所在楼层
    const hasActive=document.querySelector(".xtx-elevator .xtx-elevator-list  li a.active")
    if(hasActive)
        hasActive.classList.remove("active")
    if(scroll_Top>=entry.offsetTop&&scroll_Top<=(freshGoods.offsetTop+(freshGoods.offsetHeight/2)))
        a[0].classList.add("active")
    else if(scroll_Top>=(popularGoods.offsetTop-(popularGoods.offsetHeight/2))&&scroll_Top<=(popularGoods.offsetTop+(popularGoods.offsetHeight/2)))
        a[1].classList.add("active")
    else if(scroll_Top>=(brandGoods.offsetTop-(brandGoods.offsetHeight/2))&&scroll_Top<=(brandGoods.offsetTop+(brandGoods.offsetHeight/2)))
        a[2].classList.add("active")
    else if(scroll_Top>=(latestTopic.offsetTop-(latestTopic.offsetHeight/2))&&scroll_Top<=(latestTopic.offsetTop+(latestTopic.offsetHeight/2)))
        a[3].classList.add("active")
})
// 点击导航栏“楼层”电梯跳转至对应区域
elevatorList.addEventListener("click",function(e){
    let target=e.target
    if(target.dataset.name==='new')
        window.scrollTo(0,freshGoods.offsetTop)
    else if(target.dataset.name==='popular')
        window.scrollTo(0,popularGoods.offsetTop)
    else if(target.dataset.name==='brand')
        window.scrollTo(0,brandGoods.offsetTop)
    else if(target.dataset.name==='topic')
        window.scrollTo(0,latestTopic.offsetTop)
    else
        window.scrollTo(0,0)
})

