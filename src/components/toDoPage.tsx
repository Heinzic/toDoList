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
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill-rule="nonzero" d="M256 0c70.68 0 134.68 28.66 181.01 74.99C483.34 121.32 512 185.32 512 256c0 70.68-28.66 134.68-74.99 181.01C390.68 483.34 326.68 512 256 512c-70.68 0-134.68-28.66-181.01-74.99C28.66 390.68 0 326.68 0 256c0-70.68 28.66-134.68 74.99-181.01C121.32 28.66 185.32 0 256 0zm0 366.69c-14.07 0-25.59-11.55-25.59-25.59v-59.52H170.9c-14.05 0-25.6-11.54-25.6-25.6 0-14.05 11.52-25.59 25.6-25.59h59.51v-59.51c0-14.05 11.53-25.59 25.59-25.59s25.59 11.51 25.59 25.59v59.51h59.52c14.07 0 25.6 11.52 25.6 25.59 0 14.08-11.55 25.6-25.6 25.6h-59.52v59.52c0 14.07-11.52 25.59-25.59 25.59zM412.87 99.13C372.73 58.99 317.26 34.16 256 34.16c-61.26 0-116.73 24.83-156.87 64.97S34.16 194.74 34.16 256c0 61.26 24.83 116.73 64.97 156.87s95.61 64.97 156.87 64.97c61.26 0 116.73-24.83 156.87-64.97s64.97-95.61 64.97-156.87c0-61.26-24.83-116.73-64.97-156.87z"/></svg>
                    </Button>
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