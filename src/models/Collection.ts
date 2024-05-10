import axios from 'axios'

import {Eventing} from "./Eventing";

import type {AxiosResponse} from 'axios'

export class Collection<T, K> {
    models: T[] = []
    events: Eventing = new Eventing()
    
    constructor(
        public rootUrl:string,
        public deserialize: (json: K) => T
    ) {}
    
    get on() {
        return this.events.on
    }
    
    get trigger() {
        return this.events.trigger
    }
    
    fetch():void {
        axios.get(this.rootUrl)
            .then((response: AxiosResponse) => {
                response.data.forEach((value: K) => {
                    this.models.push(this.deserialize(value))
                })
            })
            .catch((error) => {
                console.log('Error:', error)
            })
        
        this.trigger('change')
    }
}