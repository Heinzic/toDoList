import { FunctionComponent } from "react";
import { IToDo } from "../store/toDoStore";
import toDo from "../store/toDoStore";
 
const ToDoItem: FunctionComponent<IToDo> = ({completed, id, title}) => {
    return ( 
        <>
            <div key={id} className="flex gap-5 text-2xl items-center">
                <input className="w-5 h-5" type="checkbox" checked ={completed} onClick={() => toDo.completeToDo(id)}/>
                {title}
                <button className="bg-red-400" onClick={() => toDo.removeToDo(id)}>Удалить задачу</button>
            </div>
        </>
     );
}
 
export default ToDoItem;