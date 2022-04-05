const { getBmi } = require('../controllers/bmi.controller');
module.exports = x => x.app.post(`${x.url}/bmi`, getBmi)


  
