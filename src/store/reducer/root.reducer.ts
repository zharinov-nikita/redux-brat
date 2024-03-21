import {todoReducer} from "./todo.reducer.ts";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({todo: todoReducer})
