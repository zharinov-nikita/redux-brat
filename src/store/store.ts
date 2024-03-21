import {thunk} from 'redux-thunk';
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducer/root.reducer.ts";
import {TypedUseSelectorHook, useSelector as useSelectorRedux} from "react-redux";

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type RootState = ReturnType<typeof rootReducer>
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux
