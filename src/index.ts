import {UserForm} from "./views/UserForm";
import {User} from "./models/User";

const user = User.buildUser({name: 'Name', age: 20})

const userForm = new UserForm(
    // @ts-ignore
    document.getElementById('root'),
    user
)

userForm.render()