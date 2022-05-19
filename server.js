// 1.引入express
const express = require('express')

// 2.创建应用对象
const app = express() 

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体
    response.send('HELLO EXPRESS')
})
// 可以接收任意类型的请求
app.all('/server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头
    response.setHeader('Access-Control-Allow-headers','*')
    // 设置响应体
    response.send('HELLO EXPRESS POST')
})
app.all('/json-server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头
    response.setHeader('Access-Control-Allow-headers','*')
    // 响应一个数据
    const data = {
        name:'atguigu',
        address:'北京'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    // 设置响应体
    response.send(str)
})
// 针对IE缓存
app.get('/ie',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体
    response.send('HELLO IE -2')
})
// 延时响应
app.all('/delay',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(()=>{
        // 设置响应体
        response.send('延时响应')
    },1000)
})
// Jquery 服务
app.all('/jquery-server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    // response.send('Hello Jquery AJAX')
    const data = {name:'尚硅谷'}
    response.send(JSON.stringify(data))
})
// axios 服务
app.all('/axios-server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    // response.send('Hello Jquery AJAX')
    const data = {name:'尚硅谷'}
    response.send(JSON.stringify(data))
})
// fetch 服务
app.all('/fetch-server',(request,response)=>{
    // 设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    // response.send('Hello Jquery AJAX')
    const data = {name:'尚硅谷'}
    response.send(JSON.stringify(data))
})
// JSONP 服务
app.all('/jsonp-server',(request,response)=>{
    // response.send('hello jsonp-server')
    const data = {
        username:'巧遇在街头'
    }
    const str = JSON.stringify(data)
    response.end(`handle(${str})`)
})
// 用户名检测是否存在
app.all('/check-username',(request,response)=>{
    // response.send('hello jsonp-server')
    const data = {
        exist:1,
        msg:'用户名已经存在'
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 返回结果
    response.end(`handle(${str})`)
})
// jquery-jsonp服务
app.all('/jquery-jsonp-server',(request,response)=>{
    const data = {
        name:'巧遇在街角',
        city:['北京','上海','深圳']
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 接收callback参数
    let cb = request.query.callback
    // 返回结果
    response.end(`${cb}(${str})`)
})
app.all('/cors-server',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    // response.setHeader('Access-Control-Allow-Origin','*')
    response.send('hello CROS')
})
app.get('/getStudent',(request,response)=>{
    // 设置响应头
    // response.setHeader('Access-Control-Allow-Origin','*')
    const student = {
        name:'巧遇',
        age:18,
        address:'郑州'
    }
    const str = JSON.stringify(student)
    response.send(str)
})
// 4.监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动，8000端口监听中')
})