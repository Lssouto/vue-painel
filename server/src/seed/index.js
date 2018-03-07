import UserServ from '../service/user'
import model from '../model'

const seedUser = ()=>{
    console.log('Carregando as sementes')
    let users = []

    users.push( new model.userModel({
        username: 'admin',
        password: 'admin',
        active: true
    }))

    for(let index = 0; index < 5; index++) {
        users.push( new model.userModel({
            username: 'user'+index,
            password: 'pwd'+ index,
            active: (index % 2 == 0)
        }))
    }
    console.log('Sementes carregadas')
    console.log('Salvando sementes ... ')
    UserServ.addUsers(users);
}

export default {
    user: seedUser
}