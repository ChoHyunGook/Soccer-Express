const { calc } = require("../service/calc.service")

exports.getCalc= (req,res)=>{
    const {num1,op,num2}= req.body
    console.log(`넘어온 JSON 값: ${JSON.stringify(req.body)}`)
    console.log(`숫자1: ${num1}`)
    console.log(`연산자: ${op}`)
    console.log(`숫자2: ${num2}`)
    const json=calc(req.body)
    console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
    res.json(json)
  }