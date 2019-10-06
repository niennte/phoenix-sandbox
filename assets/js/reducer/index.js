import { combineReducers } from 'redux';

import equation, { initialState as solutionInitialState } from './equations/equation'
import connection, { initialState as connectionInitialState } from './connection'

const reducers = combineReducers({
  equation,
  connection,
});

const initialState = {
  equation: {
    solution: solutionInitialState
  },
  connection: connectionInitialState
}

export { initialState }
export default reducers;
