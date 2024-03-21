import {Action, Dispatch} from "redux";

export interface Todo {
    id: number
    title: string
    completed: boolean
}


export enum TodoActionType {
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO",
    UPDATE_TODO = "UPDATE_TODO",
    SET_TODOS = "SET_TODOS"
}


// PAYLOAD

export type AddTodoPayload = Pick<Todo, 'title'>
export type DeleteTodoPayload = Pick<Todo, 'id'>
export type UpdateTodoPayload = Partial<Todo> & { id: number }
export type SetTodosPayload = Todo[]

// ACTION CREATOR TYPE

type ActionCreator<T, P> = Action & {
    type: T
    payload: P
}

// ACTION CREATOR

export type ActionTodo = AddTodoAction | DeleteTodoAction | UpdateTodoAction | SetTodosAction

type AddTodoAction = ActionCreator<TodoActionType.ADD_TODO, AddTodoPayload>
type DeleteTodoAction = ActionCreator<TodoActionType.DELETE_TODO, DeleteTodoPayload>
type UpdateTodoAction = ActionCreator<TodoActionType.UPDATE_TODO, UpdateTodoPayload>
type SetTodosAction = ActionCreator<TodoActionType.SET_TODOS, SetTodosPayload>

export function addTodo(payload: AddTodoPayload): AddTodoAction {
    return {type: TodoActionType.ADD_TODO, payload}
}

export function deleteTodo(payload: DeleteTodoPayload): DeleteTodoAction {
    return {type: TodoActionType.DELETE_TODO, payload}
}

export function updateTodo(payload: UpdateTodoPayload): UpdateTodoAction {
    return {type: TodoActionType.UPDATE_TODO, payload}
}

export  function  setTodos(payload: Todo[]): SetTodosAction {
    return {
        type: TodoActionType.SET_TODOS,
        payload
    }
}

export  function  fetchTodos(){
    return function (dispatch: Dispatch)  {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                dispatch(setTodos(json as Todo[]))
            })
    }
}
