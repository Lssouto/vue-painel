import UserServ from '../service/user'
import UserFact from '../factory/user'

const seedUser = async ()=>{
    const admin = UserFact.create({ username: 'admin',
        password: 'admin',
        active: true
    })
    
    UserServ.create(admin)
}

export default {
    user: seedUser
}