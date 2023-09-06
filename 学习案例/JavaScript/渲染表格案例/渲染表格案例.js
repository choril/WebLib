let username=prompt('请输入用户姓名：'),goods_num=+prompt('请输入购买数量：'),address=prompt('请输入收货地址：')
document.write(`
<table>
    <tr>
        <th>用户姓名</th>
        <th>商品名称</th>
        <th>商品单价</th>
        <th>购买数量</th>
        <th>商品小计</th>
        <th>收货地址</th>
    </tr>
    <tr>
        <td>${username}</td>
        <td>HUAWEI Mate 60 Pro</td>
        <td>5000</td>
        <td>${goods_num}</td>
        <td>${goods_num*5000}</td>
        <td>${address}</td>
    </tr>
</table>`
)