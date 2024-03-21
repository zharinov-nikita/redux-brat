import {ActionTodo, Todo, TodoActionType} from "../actions/todo.action.ts";


export interface InitialState {
    todos: Todo[]
}

const initialState: InitialState = {
    todos: [],
}

export const todoReducer = (state: InitialState, action: ActionTodo): InitialState => {
    switch (action.type) {
        case TodoActionType.ADD_TODO:
            return {...state, todos: [...state.todos, {...action.payload, id: Date.now(), completed: false}]}
        case TodoActionType.DELETE_TODO:
            return {...state, todos: [...state.todos.filter(todo => todo.id !== action.payload.id)]}
        case TodoActionType.UPDATE_TODO:
            return {
                ...state, todos: [...state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {...todo, ...action.payload}
                    }
                    return todo
                })]
            }
        case TodoActionType.SET_TODOS:
            return {...state, todos: [...action.payload]}
        default:
            return initialState
    }
}
