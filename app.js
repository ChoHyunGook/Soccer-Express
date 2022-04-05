require('dotenv').config();
var cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, MONGO_URI } = process.env;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const APP = './app/routes'
require(`${APP}/board.route`)({url:'/api/board',app})
require(`${APP}/todo.route`)({url:'/api/todo',app})
require(`${APP}/user.route`)({url:'/api/user',app})
require(`${APP}/game.route`)({url:'/api/game',app})
require(`${APP}/admin.route`)({url:'/api/admin',app})
require(`${APP}/basic.route`)({url:'/api/basic',app})

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

app.listen(port, () => {
  console.log('***************** ***************** *****************')
  console.log('***************** ***************** *****************')
  console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
  console.log('***************** ***************** *****************')
  console.log('***************** ***************** *****************')
})

app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})


app.post("/api/user/signup", (req, res)=>{
  const {id, pw, name, tel} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`Id 값 : ${id}`)
  console.log(`pw 값 : ${pw}`)
  console.log(`name 값 : ${name}`)
  console.log(`tel 값 : ${tel}`)
  res.json(req.body)
})