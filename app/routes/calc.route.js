const { getCalc } = require('../controllers/calc.controller');
module.exports = x => x.app.post(`${x.url}/calc`,getCalc)