import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import toDo from "../store/toDoStore";
import ToDoItem from "./toDoItem";

interface Props {
    
}
 
const toDoPage: FunctionComponent<Props> = observer(() => {
    return ( 
        <div className="flex justify-around items-center">
            <div className="my-[100px] flex gap-3 flex-col">
                {toDo.toDoArray.map(item =>
                <ToDoItem {...item}/>
                )}
            </div>
            <div className="">
                <h1>dddd</h1>
            </div>
        </div>
     );
})
 
export default toDoPage;