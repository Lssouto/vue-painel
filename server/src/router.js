import config from './config'
import AuthCtrl from './controller/Authentication'
import Seed from './seed'

const apiLocation = config.data.api;

const _all = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
    
    if ('OPTIONS' === req.method) {
      return res.sendStatus(200)
    }
    
    
    const AUTHTOKEN = req.header('Authorization')
    console.log(AUTHTOKEN)

    //Header de autorizacao veio vazio ou null?
    if( AUTHTOKEN == 'null' || !AUTHTOKEN){
      
      //Ele esta tentando logar ou se cadastracar?
      if(
          req.path === apiLocation + '/login' 
          // || req.path === apiLocation + '/user/new'
          // || req.path === apiLocation + '/user/fgtPassword'
        )
        next()
      else
        res.redirect(apiLocation + '/login')
    }
    else{
      if(req.path === apiLocation + '/auth/logout')
        next()
      else
        res.status(403).send({
          status: false,
          message: 'Token Expirado',
          data: null
        })
    }
  
}

module.exports = (router)=>{
  
  router.all(apiLocation +'*', _all),
  router.post(apiLocation  + '/login', AuthCtrl.verify),
  router.get(apiLocation  + '/seedUser', Seed.user),
  router.get(apiLocation  + '/validateToken', AuthCtrl.validate)
};
