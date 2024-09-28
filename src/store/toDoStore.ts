import { makeAutoObservable } from "mobx"
import localeStorageService from "../services/localeStorageService";

export interface IToDo {
    id: string,
    title: string,
    completed: boolean
    subToDos: IToDo[]
}

function getToDos(): IToDo[] {
    const toDos = localeStorageService.getItem('todos')

    if (instanceOfIToDo(toDos)) return JSON.parse(toDos);
    return [];

    function instanceOfIToDo(object: any): object is IToDo {
        return object;
    }
}

class toDo {
    toDoArray = getToDos()

    constructor() {
        makeAutoObservable(this)
    }

    addToDo(toDo: IToDo) {
        this.toDoArray.push(toDo);
        localeStorageService.setItem(this.toDoArray, 'todos');
    }

    addSubToDo(toDo: IToDo, id:string) {
        this.toDoArray.find(item => item.id === id)?.subToDos?.push(toDo);
        localeStorageService.setItem(this.toDoArray, 'todos');
    }

    removeToDo(id: string) {
        this.toDoArray = this.toDoArray.filter(toDo => toDo.id !== id)
        localeStorageService.setItem(this.toDoArray, 'todos');
    }

    completeToDo(id: string) {
        this.toDoArray = this.toDoArray.map(toDo => toDo.id === id ? {...toDo, completed: !toDo.completed} : toDo)
        localeStorageService.setItem(this.toDoArray, 'todos');
    }
}

export default new toDo()