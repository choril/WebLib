let s1=prompt('第一季度收入：'),s2=prompt('第二季度收入：'),s3=prompt('第三季度收入：'),s4=prompt('第四季度收入：')
document.write(
    ` <div class="zhuzhuang">
        <span style="height:${s1}px" class="season1"><p>${s1}</p></span>
        <span style="height:${s2}px" class="season2"><p>${s2}</p></span>
        <span style="height:${s3}px" class="season3"><p>${s3}</p></span>
        <span style="height:${s4}px" class="season4"><p>${s4}</p></span>
    </div>
    <div class="txt">
        <p>第一季度</p>
        <p>第二季度</p>
        <p>第三季度</p>
        <p>第四季度</p>
    </div>`
)