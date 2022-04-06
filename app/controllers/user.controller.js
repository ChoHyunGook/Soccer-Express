const db = require('../models/index')
const UserSchema = db.user
exports.signup = (req, res) => {
    new UserSchema({
        id: req.body.id, 
        password: req.body.password, 
        name: req.body.name, 
        telephone: req.body.telephone
    }).save(()=>{
        res.status(200).json({'result':'ok'}) 
    })
    
}