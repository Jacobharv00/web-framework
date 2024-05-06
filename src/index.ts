import {User} from './models/User'

const user = new User({id:1, name: 'Newer Name', age: 0})

user.on('save', () => {
    console.log('User:',user)
})

user.save()