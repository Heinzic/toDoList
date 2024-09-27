import { makeAutoObservable } from "mobx"

export interface IToDo {
    id: number,
    title: string,
    completed: boolean
}

class toDo {
    toDoArray = [
        {id:1, title:'Задача 1', completed:false},
        {id:2, title:'Задача 2', completed:false},
        {id:3, title:'Задача 3', completed:false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addToDo(toDo: IToDo) {
        this.toDoArray.push(toDo);
    }

    removeToDo(id: number) {
        this.toDoArray = this.toDoArray.filter(toDo => toDo.id !== id)
    }

    completeToDo(id: number) {
        this.toDoArray = this.toDoArray.map(toDo => toDo.id === id ? {...toDo, completed: !toDo.completed} : toDo)
    }
}

export default new toDo()