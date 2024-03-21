import {useSelector} from "../store/store.ts";
import {
    deleteTodo,
    DeleteTodoPayload,
    fetchTodos, setTodos,
    updateTodo,
    UpdateTodoPayload
} from "../store/actions/todo.action.ts";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export function Todos (){
    const {todos} = useSelector(state => state.todo)
    const dispatch = useDispatch()

    function handlerDeleteTodo(payload: DeleteTodoPayload) {
        return () => dispatch(deleteTodo(payload))
    }

    function handlerUpdateTodo(payload: UpdateTodoPayload) {
        return () => dispatch(updateTodo(payload))
    }

    useEffect(()=> {
        dispatch(fetchTodos())
    }, [])



    return <>{todos.map((todo, index) => <div key={index}>
        <div onClick={handlerUpdateTodo({
            id: todo.id,
            completed: !todo.completed
        })}>{todo.completed ? "✅" : "🟩"}</div>
        <p>id: {todo.id}</p>
        <p style={{textDecoration: todo.completed ? "line-through" : "none"}}>title: {todo.title}</p>
        <button onClick={handlerDeleteTodo(todo)}>delete todo</button>
        <hr/>
    </div>)}</>
}
