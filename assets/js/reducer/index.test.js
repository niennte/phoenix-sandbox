import { createStore } from 'redux'

import reducers from './index'

import connection from './connection'
import equation from './equations/equation'

const store = createStore(reducers)

// check that initial state of the root reducer matches
// what child reducers return given an empty action
test('Should match initial state', () => {
  expect(store.getState().connection).toEqual(connection(undefined, {}))
  expect(store.getState().equation).toEqual(equation(undefined, {}))
})

// check that child reducers handle an action
test('Should delegate an action', () => {
  const action = { type: 'TEST' }
  store.dispatch(action)
  expect(store.getState().connection).toEqual(connection(undefined, action))
  expect(store.getState().equation).toEqual(equation(undefined, action))
})
