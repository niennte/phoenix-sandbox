// @flow
import { APPLY_SOLUTION } from '../../action'

const initialState = {
  "equation_type": "linear",
  "solution": {},
  "solution_type": "INFINITE_SET"
}

const quadratic = (state = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case APPLY_SOLUTION:
      return {...state, ...action.payload }
    default:
      return state
  }
}

export { initialState }
export default quadratic