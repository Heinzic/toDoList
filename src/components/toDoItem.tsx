import { FunctionComponent } from "react";
import { IToDo } from "../store/toDoStore";
import toDo from "../store/toDoStore";
import Button from "../ui/Button";
import { observer } from "mobx-react-lite";

const ToDoItem: FunctionComponent<IToDo> = observer(({ completed, id, title, subToDos }) => {
    return (
        <>
            <div key={id} className="flex gap-5 text-2xl items-center">
                <div className="flex-grow">{title}</div>
                <input
                    className="w-8 h-10"
                    type="checkbox"
                    checked={completed}
                    onChange={() => toDo.completeToDo(id)}
                />
                <Button
                    className="bg-red-400 w-8 rounded-md text-center align-middle"
                    onClick={() => toDo.removeToDo(id)}
                    text="x"
                />
                <Button
                    className="bg-blue-400 w-[30px] h-[30px] rounded-full"
                    onClick={() => {
                        toDo.addSubToDo(
                            {
                                id: Date.now().toString(),
                                completed: false,
                                title: 'subtest2',
                                subToDos: []
                            },
                            id
                        );
                    }}
                    text="+"
                />
            </div>
            {subToDos.map((item) => {
                return <div className="ml-[20px]"><ToDoItem key={item.id} {...item} /></div>;
            })}
        </>
    );
});

export default ToDoItem;