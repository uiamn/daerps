import { actionCreatorFactory } from 'typescript-fsa'
import { ISheet } from '../states/ISheet'

const actionCreator = actionCreatorFactory('board-action')
export const changeSheetAction = actionCreator<Partial<ISheet>>('change-board')
