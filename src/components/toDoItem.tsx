import { FunctionComponent } from "react";
import { IToDo } from "../store/toDoStore";
import toDo from "../store/toDoStore";
import Button from "../ui/Button";
 
const ToDoItem: FunctionComponent<IToDo> = ({completed, id, title}) => {
    return ( 
        <>
            <div key={id} className="flex gap-5 text-2xl items-center ">
                <div className="flex-grow">{title}</div>
                <input className="w-8 h-10" type="checkbox" checked ={completed} onClick={() => toDo.completeToDo(id)}/>
                <Button className="bg-red-400 w-8 rounded-md text-center align-middle" onClick={() => toDo.removeToDo(id)} text="x" />
            </div>
        </>
     );
}
 
export default ToDoItem;