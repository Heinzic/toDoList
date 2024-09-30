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

function findToDoById(todos: IToDo[], id: string): IToDo | null {
    for (const todo of todos) {
        if (todo.id === id) {
            return todo;
        }

        if (todo.subToDos) {
            const result = findToDoById(todo.subToDos, id);
            if (result) {
                return result;
            }
        }
    }
    return null;
}

function findAndRemoveToDoById(todos: IToDo[], id: string): IToDo[] {
    return todos.reduce((acc: IToDo[], todo: IToDo) => {
        if (todo.id === id) {
            return acc; 
        }

        if (todo.subToDos) {
            const updatedSubToDos = findAndRemoveToDoById(todo.subToDos, id);
            acc.push({ ...todo, subToDos: updatedSubToDos });
        } else {
            acc.push(todo);
        }

        return acc;
    }, []);
}

function completeToDoById(todos: IToDo[], id: string, isSub: boolean = false): IToDo[] {
    return todos.reduce((acc: IToDo[], todo: IToDo) => {
        
        if (todo.id === id || isSub) {
            todo.completed = !todo.completed;
            
            if (todo.subToDos) {
                const updatedSubToDos = completeToDoById(todo.subToDos, id, true);
                acc.push({ ...todo, completed: todo.completed, subToDos: updatedSubToDos });
            }

        } else {
            acc.push({ ...todo, completed: todo.completed });
            completeToDoById(todo.subToDos, id);
        }

        return acc;
    }, []);
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
        findToDoById(this.toDoArray, id)?.subToDos.push(toDo);
        localeStorageService.setItem(this.toDoArray, 'todos');
    }

    removeToDo(id: string) {
        this.toDoArray = findAndRemoveToDoById(this.toDoArray, id);
        localeStorageService.setItem(this.toDoArray, 'todos');
    }

    completeToDo(id: string) {
        this.toDoArray = completeToDoById(this.toDoArray, id);
        localeStorageService.setItem(this.toDoArray, 'todos');
    }
}

export default new toDo()