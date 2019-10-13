// @flow

import { createAction } from 'redux-actions'

const APPLY_SOLUTION = 'APPLY_SOLUTION'
const applySolution = createAction(APPLY_SOLUTION)

const REPORT_ERROR = 'REPORT_ERROR'
const reportError = createAction(REPORT_ERROR)

const CONNECTION_OK = 'CONNECTION_OK'
const connectionOk = createAction(CONNECTION_OK)

const CONNECTION_ERROR = 'CONNECTION_ERROR'
const connectionError = createAction(CONNECTION_ERROR)

export {
  APPLY_SOLUTION,
  applySolution,
  REPORT_ERROR,
  reportError,
  CONNECTION_OK,
  connectionOk,
  CONNECTION_ERROR,
  connectionError,
}
