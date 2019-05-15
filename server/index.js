const express = require('express')
const app = express()
app.get('/',async(req,res)=>{
  res.send('index')
})
// 可以设置跨域
app.use(require('cors')())
// 可以识别json文件
app.use(express.json())
// 连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-main',{
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true
})
// 创建数据库架构
const Article = mongoose.model('Article', new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
}))
// 文章详情
app.get('/api/article/:id',async(req,res) => {
  const article = await Article.findById(req.params.id)
  res.send(article)
})
// 增加文章
app.post('/api/article',async(req,res) => {
  const article = await Article.create(req.body)
  res.send(article)
})
// 文章列表
app.get('/api/article',async(req,res) => {
  const articles = await Article.find()
  res.send(articles)
})
// 删除文章
app.delete('/api/article/:id',async (req,res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    status: true
  })
})
// 修改文章
app.put('/api/article/:id',async(req,res) => {
  const article = await Article.findByIdAndUpdate(req.params.id,req.body)
  res.send(article)
})

app.listen(3000,()=>{
  console.log('server is running ')
})