// @flow

import {
  APPLY_SOLUTION,
  REPORT_ERROR,
} from '../../action'
import quadraticReducer, { initialState as quadraticInitialState } from './quadratic'

const initialState = {
  solution: quadraticInitialState,
  hasErrors: false,
  error: {},
}

const equation = (state = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case APPLY_SOLUTION:
      return {
        ...state,
        ...{
          solution: quadraticReducer(state.solution, action),
          hasErrors: false,
          error: {},
        },
      }
    case REPORT_ERROR:
      return {
        ...state,
        ...{
          hasErrors: true,
          error: action.payload,
        },
      }
    default:
      return state
  }
}

export { initialState }
export default equation
