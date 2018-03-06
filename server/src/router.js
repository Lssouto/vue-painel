const config  = require('./config')
const AuthCtrl = require('./controller/Authentication')

const _all = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
    if ('OPTIONS' === req.method) {
      return res.sendStatus(200)
    }
    next()
}

module.exports = (router)=>{
  
  router.all(config.data.api+'*', _all),
  router.get(config.data.api + '/login', AuthCtrl.get)
  router.post(config.data.api + '/login', AuthCtrl.post)
  
};
