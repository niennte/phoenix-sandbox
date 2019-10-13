import DeepFreeze from 'deep-freeze'
import equation, { initialState } from './equation'
import {
  APPLY_SOLUTION,
  REPORT_ERROR,
} from '../../action'

const sampleSolution = {
  ...initialState.solution,
  ...{ solution_type: 'TEST1' },
}

const sampleState = DeepFreeze({
  ...initialState,
  ...{ solution: sampleSolution },
})

const samplePayload = {
  solution_type: 'TEST2',
}

const errorPayload = {
  foo: 'Bar...',
}


test(`Should delegate ${APPLY_SOLUTION}`, () => {
  expect(
    equation(sampleState, {
      type: APPLY_SOLUTION,
      payload: samplePayload,
    })
      .solution
      .solution_type,
  ).toEqual(samplePayload.solution_type)
})

test(`Should handle ${REPORT_ERROR}`, () => {
  expect(
    equation(sampleState, {
      type: REPORT_ERROR,
      payload: errorPayload,
    }),
  ).toEqual({
    ...sampleState,
    error: errorPayload,
    hasErrors: true,
  })
})

test('Should handle unknown', () => {
  expect(
    equation(sampleState, { type: 'UNKNOWN' }),
  ).toEqual(sampleState)
})

test('Should handle undefined', () => {
  expect(
    equation(undefined, {}),
  ).toEqual(initialState)
})
