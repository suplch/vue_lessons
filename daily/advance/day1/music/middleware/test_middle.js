// 定义一个中间件处理函数
export default function test(context) {

  // context.req  表示服务器的请求对象
  // context.res  响应对象
  // context.router   路由对象
  // context.route    路由参数对象
  // ....

  for(let prop in context) { // 打印出所有的属性
    console.log(prop);
  }
}
