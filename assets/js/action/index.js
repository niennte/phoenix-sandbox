// @flow

import { createAction } from 'redux-actions'

import { channel } from '../socket'

export const APPLY_SOLUTION = 'APPLY_SOLUTION'

export const emitParams = ( params: Object ) => () => {
  channel.push("solve_request", { params: JSON.stringify(params) } )
};

export const applySolution = createAction(APPLY_SOLUTION)


