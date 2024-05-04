import {User} from "./models/User";

const user = new User({name: 'Ted', age: 34})

user.set({name: 'New Name'})

const userName = user.get("name")
const userAge = user.get("age")

console.log('userName:', userName)
console.log('userAge:', userAge)