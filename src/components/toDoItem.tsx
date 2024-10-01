import { FunctionComponent, useState } from "react";
import { IToDo } from "../store/toDoStore";
import toDo from "../store/toDoStore";
import Button from "../ui/Button";
import { observer } from "mobx-react-lite";

const ToDoItem: FunctionComponent<IToDo> = observer(({ completed, id, title, subToDos }) => {

    const [openSubToDos, setOpenSubToDos] = useState(false)

    return (
        <>
            <div key={id} className="flex gap-5 text-2xl items-center mt-2">
                {subToDos.length > 0 && 
                <Button onClick={() => setOpenSubToDos(!openSubToDos)} className={openSubToDos ? 'transform rotate-90 duration-300': 'duration-300'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                </Button>
                }
                <div className="flex-grow">{title}</div>
                <input
                    className="w-8 h-10"
                    type="checkbox"
                    checked={completed}
                    onChange={() => toDo.completeToDo(id)}
                />
                <Button
                    onClick={() => toDo.removeToDo(id)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 40 40">
                    <path fill="#f78f8f" d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"></path><path fill="#c74343" d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"></path><path fill="#fff" d="M18.5 10H21.5V30H18.5z" transform="rotate(-134.999 20 20)"></path><path fill="#fff" d="M18.5 10H21.5V30H18.5z" transform="rotate(-45.001 20 20)"></path>
                </svg>
                </Button>
                <Button
                    className="bg-blue-400 w-[40px] h-[40px] rounded-full"
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
                >
                <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill-rule="nonzero" d="M256 0c70.68 0 134.68 28.66 181.01 74.99C483.34 121.32 512 185.32 512 256c0 70.68-28.66 134.68-74.99 181.01C390.68 483.34 326.68 512 256 512c-70.68 0-134.68-28.66-181.01-74.99C28.66 390.68 0 326.68 0 256c0-70.68 28.66-134.68 74.99-181.01C121.32 28.66 185.32 0 256 0zm0 366.69c-14.07 0-25.59-11.55-25.59-25.59v-59.52H170.9c-14.05 0-25.6-11.54-25.6-25.6 0-14.05 11.52-25.59 25.6-25.59h59.51v-59.51c0-14.05 11.53-25.59 25.59-25.59s25.59 11.51 25.59 25.59v59.51h59.52c14.07 0 25.6 11.52 25.6 25.59 0 14.08-11.55 25.6-25.6 25.6h-59.52v59.52c0 14.07-11.52 25.59-25.59 25.59zM412.87 99.13C372.73 58.99 317.26 34.16 256 34.16c-61.26 0-116.73 24.83-156.87 64.97S34.16 194.74 34.16 256c0 61.26 24.83 116.73 64.97 156.87s95.61 64.97 156.87 64.97c61.26 0 116.73-24.83 156.87-64.97s64.97-95.61 64.97-156.87c0-61.26-24.83-116.73-64.97-156.87z"/></svg>
                </Button>
            </div>
            {openSubToDos && subToDos.map((item) => {
                return <div className="ml-[40px] last:ml-[64px]"><ToDoItem key={item.id} {...item} /></div>;
            })}
        </>
    );
});

export default ToDoItem;