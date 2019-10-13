import DeepFreeze from 'deep-freeze'
import quadratic, { initialState } from './quadratic'
import {
  APPLY_SOLUTION,
} from '../../action'

const sampleState = DeepFreeze({
  ...initialState,
  ...{ solution_type: 'TEST1' },
})

const samplePayload = {
  ...initialState,
  ...{ solution_type: 'TEST2' },
}

test(`Should handle ${APPLY_SOLUTION}`, () => {
  expect(
    quadratic(DeepFreeze({}), {
      type: APPLY_SOLUTION,
      payload: samplePayload,
    }).solution_type,
  ).toEqual(samplePayload.solution_type)
})

test('Should handle unknown', () => {
  expect(
    quadratic(sampleState, { type: 'UNKNOWN' }),
  ).toEqual(sampleState)
})

test('Should handle undefined', () => {
  expect(
    quadratic(undefined, {}),
  ).toEqual(initialState)
})
