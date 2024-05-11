import {User} from "../models/User";

export class UserForm {
    constructor(public parent: Element, public model: User) {}
    
    eventsMap(): {[key: string]: () => void} {
        return {
            'click:button': this.onButtonClick,
            'mouseenter:h1': this.onMouseEnter
        }
    }
    
    onButtonClick():void {
        console.log('HI')
    }
    
    onMouseEnter():void {
        console.log('Entered')
    }
    
    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <div>User name: ${this.model.get('name')}</div>
                <div>User age: ${this.model.get('age')}</div>
                <input />
                <button>Click Me</button>
            </div>`
    }
    
    bindEvents(fragment: DocumentFragment):void {
        const eventsMap = this.eventsMap
        
        for(let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':')
            
            fragment.querySelectorAll(selector).forEach(element => {
                //@ts-ignore
                element.addEventListener(eventName, eventsMap[eventKey])
            })
        }
    }
    
    render():void {
        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template()
        
        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content)
    }
}