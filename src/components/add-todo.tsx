import {useState} from "react";
import {addTodo} from "../store/actions/todo.action.ts";
import {useDispatch} from "react-redux";

export function AddTodo (){
    const [addTodoText, setAddTodoText] = useState("")
    const dispatch = useDispatch()

    function handlerAddTodo() {
        dispatch(addTodo({title: addTodoText}))
        setAddTodoText('')
    }

    return (<div>
        <input value={addTodoText} onChange={(e) => setAddTodoText(e.target.value)}/>
        <button onClick={handlerAddTodo}>addTodo</button>
    </div>)
}
