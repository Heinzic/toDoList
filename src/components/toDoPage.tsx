import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import toDo from "../store/toDoStore";
import ToDoItem from "./toDoItem";
import Button from "../ui/Button";

const toDoPage: FunctionComponent = observer(() => {
    return ( 
        <div className="flex justify-around items-center">
            <div className="my-[100px] flex gap-3 flex-col">
                <div className="">
                   <Button className="bg-blue-400 w-[30px] h-[30px] rounded-full" onClick={() => {
                        toDo.addToDo({
                            id: Date.now().toString(),
                            completed: false,
                            title:'ddd',
                            subToDos: []
                        })}
                        }
                        text="+"
                   />
                </div>
                
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