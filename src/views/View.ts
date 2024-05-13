import {User} from "../models/User";

// Code for upcoming lecture
// import { Model, HasId } from '../models/Model';
//
// export abstract class View<T extends Model<K>, K extends HasId> {

export abstract class View {
    constructor(public parent: Element, public model: User) {
        this.bindModel()
    }
    
    abstract eventsMap():{[key:string]: () => void}
    abstract template(): string

    // Re-render onChange
    bindModel() {
        this.model.on('change', () => {
            this.render()
        })
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap()

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':')

            fragment.querySelectorAll(selector).forEach(element => {
                //@ts-ignore
                element.addEventListener(eventName, eventsMap[eventKey])
            })
        }
    }

    render(): void {
        // Clear everything
        this.parent.innerHTML = ''

        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template()

        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content)
    }
}