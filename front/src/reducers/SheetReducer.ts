import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { changeSheetAction } from '../actions/SheetAction'
import { ISheet } from '../states/ISheet'

export const initSheet: ISheet = {
  id: '', users: [], items: []
}

export const sheetReducer = reducerWithInitialState<ISheet>(initSheet)
  .case(changeSheetAction, (state, payload) => ({...state, ...payload}))
  .build();
