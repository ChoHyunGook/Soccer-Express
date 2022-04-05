exports.calc=(payload)=>{
    const {num1, op, num2}=payload
    let _num1 = Number(num1)
    let _num2 = Number(num2)
    let _op = Number(op)
    var result = {num1, op, num2}
    switch(op){
    case '+': result.res = _num1 + _num2; break;
    case '-': result.res = _num1 - _num2; break;
    case '*': result.res = _num1 * _num2; break;
    case '/': result.res = _num1 / _num2; break;
    case '%': result.res = _num1 % _num2; break;
    }
    return result
  }