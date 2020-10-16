import { combineReducers, createStore } from 'redux'
import { IState } from './states/IState'
import { sheetReducer } from './reducers/SheetReducer'

const combinedReducer = combineReducers<IState>({
  sheet: sheetReducer
})

export const store = createStore(combinedReducer)
