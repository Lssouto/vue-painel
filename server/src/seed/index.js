import UserServ from '../service/user'
import UserFact from '../factory/user'

const seedUser = async ()=>{
    const admin = UserFact.create({ username: 'admin',
        pwd: 'admin',
        active: true
    })
    
    UserServ.addUser(admin)
}

export default {
    user: seedUser
}