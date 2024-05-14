import {View} from './View'

import type {User, UserProps} from '../models/User'

export class UserEdit extends View<User, UserProps> {
    template() {
        return `
            <div>
               <div class="user-show"></div>
               <div class="user-form"></div>
            </div>`
    }
}