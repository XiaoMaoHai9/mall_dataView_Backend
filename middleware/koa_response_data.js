const path = require('path')
const fileUtils = require('../utils/file_utils')

// 处理业务逻辑的中间件，读取某个json文件的数据
module.exports = async (ctx, next) => {
    // 根据 url
    const url = ctx.request.url  // /api/seller  => ../data/seller.json 
    let filePath = url.replace('/api','')  // => /seller
    filePath = '../data' + filePath + '.json'  // => ../data/seller.json 
    // 相对路径 => 绝对路径
    filePath = path.join(__dirname,filePath)
    try{
        const ret = await fileUtils.getFileJsonDate(filePath)
        ctx.response.body = ret
    }catch(error){
        const errorMsg = {
            message: '读取文件内容失败，文件资源不存在',
            status: 404
        }
        ctx.response.body = JSON.stringify(errorMsg)
    }
    console.log(filePath);
    await next()
}