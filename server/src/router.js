import config from './config'
import AuthCtrl from './controller/Authentication'
import Seed from './seed'

const apiLocation = config.data.api;

const _all = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
    
    const AUTHTOKEN = req.header('Authorization')
    
    if ('OPTIONS' === req.method) {
      return res.sendStatus(200)
    }
    
    if( AUTHTOKEN == 'null' || !AUTHTOKEN && req.path !== apiLocation + '/login' ){
      res.redirect(apiLocation + '/login')
    }
    else{
      next()
    }  
  
}

module.exports = (router)=>{
  
  router.all(apiLocation +'*', _all),
  router.post(apiLocation  + '/login', AuthCtrl.verify),
  router.get(apiLocation  + '/seedUser', Seed.user),
  router.get(apiLocation  + '/validateToken', AuthCtrl.validate)
};
