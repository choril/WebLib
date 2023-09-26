// 1. 初始数据
const sliderData = [
    { url: './images/slider01.jpg', title: '对人类来说会不会太超前了？', color: 'rgb(100, 67, 68)' },
    { url: './images/slider02.jpg', title: '开启剑与雪的黑暗传说！', color: 'rgb(43, 35, 26)' },
    { url: './images/slider03.jpg', title: '真正的jo厨出现了！', color: 'rgb(36, 31, 33)' },
    { url: './images/slider04.jpg', title: '李玉刚：让世界通过B站看到东方大国文化', color: 'rgb(139, 98, 66)' },
    { url: './images/slider05.jpg', title: '快来分享你的寒假日常吧~', color: 'rgb(67, 90, 92)' },
    { url: './images/slider06.jpg', title: '哔哩哔哩小年YEAH', color: 'rgb(166, 131, 143)' },
    { url: './images/slider07.jpg', title: '一站式解决你的电脑配置问题！！！', color: 'rgb(53, 29, 25)' },
    { url: './images/slider08.jpg', title: '谁不想和小猫咪贴贴呢！', color: 'rgb(99, 72, 114)' },
  ]
//2.渲染
const slider=document.querySelector('.slider')
const img = document.querySelector('.slider-wrapper img')
const p=document.querySelector('.slider-footer p')
const footer=document.querySelector('.slider-footer')
const btn_prev=document.querySelector('.toggle .prev')
const btn_next=document.querySelector('.toggle .next')
let li=document.querySelector('.slider-indicator li:nth-child(1)')
img.src=sliderData[0].url
p.innerHTML=sliderData[0].title
p.style.fontFamily='钉钉进步体'
footer.style.backgroundColor=sliderData[0].color
li.classList.add('active')
let num=0
let id=setInterval(function(){
    btn_next.click()
},1500)
btn_prev.addEventListener('click',function(){
    if(num>0){
        num--
        img.src=sliderData[num].url
        p.innerHTML=sliderData[num].title
        footer.style.backgroundColor=sliderData[num].color
        li=document.querySelector(`li:nth-child(${num+1})`)
        li.classList.add('active')
        li=document.querySelector(`li:nth-child(${num+2})`)
        li.classList.remove('active')
    }
    else{
        num=sliderData.length-1
        img.src=sliderData[num].url
        p.innerHTML=sliderData[num].title
        footer.style.backgroundColor=sliderData[num].color
        li=document.querySelector(`li:nth-child(${num+1})`)
        li.classList.add('active')
        li=document.querySelector(`li:nth-child(1)`)
        li.classList.remove('active')
    }
})
btn_next.addEventListener('click',function(){
    if(num<sliderData.length-1){
        num++
        img.src=sliderData[num].url
        p.innerHTML=sliderData[num].title
        footer.style.backgroundColor=sliderData[num].color
        li=document.querySelector(`li:nth-child(${num+1})`)
        li.classList.add('active')
        li=document.querySelector(`li:nth-child(${num})`)
        li.classList.remove('active')
    }
    else{
        num=0
        img.src=sliderData[num].url
        p.innerHTML=sliderData[num].title
        footer.style.backgroundColor=sliderData[num].color
        li=document.querySelector(`li:nth-child(${num+1})`)
        li.classList.add('active')
        li=document.querySelector(`li:nth-child(${sliderData.length})`)
        li.classList.remove('active')
    }
})
slider.addEventListener('mouseenter',function(){
    clearInterval(id)
})
slider.addEventListener('mouseleave',function(){
    id=setInterval(function(){
        btn_next.click()
    },1500)
})

