// @flow
import { APPLY_SOLUTION } from '../../action'

const initialState = {
  "type": "",
  "solvable": true,
  "solutions": [],
  "solution_type": "INFINITE_SET",
  "params": {
    "c": 0,
    "b": 0,
    "a": 0
  },
  "equation": "0 * x pow 2 + 0 * x + 0 = 0"
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