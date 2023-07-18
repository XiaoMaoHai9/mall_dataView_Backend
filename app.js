// 服务器入口文件
// 1、创建 koa的实例对象
const Koa = require('koa')
const app = new Koa()
// 2、绑定中间件
// 绑定第一层中间件
const requireDurationMiddleware = require('./middleware/koa_response_duration')
app.use(requireDurationMiddleware)
// 绑定第二层中间件
const requireHeaderMiddleware = require('./middleware/koa_response_header')
app.use(requireHeaderMiddleware)
// 绑定第三层中间件
const requireDataMiddleware = require('./middleware/koa_response_data')
app.use(requireDataMiddleware)
// 3、绑定端口号 8888
app.listen(8888)

 const WebSocketService = require('./service/web_socket_service')
// 开启服务器的监听，监听客户端的连接
// 当一个客户端连接成功后，就会对这个客户端进行message事件监听
 WebSocketService.listen()