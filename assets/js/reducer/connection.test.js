import DeepFreeze from 'deep-freeze';
import connection, { initialState } from './connection';

const roomName = "Sample Room"
const sampleState = DeepFreeze(initialState);


test('Should handle CONNECTION_OK', () => {
  const samplePayload = {
    room: roomName,
    resp: {}
  };
  expect(
    connection(DeepFreeze({}), {
      type: 'CONNECTION_OK',
      payload: samplePayload,
    }),
  ).toEqual({
    joined: true,
    hasErrors: false,
    message: `Joined successfully ${roomName}`
  });
});

test('Should handle CONNECTION_ERROR', () => {
  const samplePayload = {
    room: roomName,
    resp: {}
  };
  expect(
    connection(DeepFreeze({}), {
      type: 'CONNECTION_ERROR',
      payload: samplePayload,
    }),
  ).toEqual({
    joined: false,
    hasErrors: true,
    message: `Unable to join ${roomName}`
  });
});

test('Should handle unknown', () => {
  expect(
    connection(sampleState, { type: 'UNKNOWN' }),
  ).toEqual(sampleState);
});

test('Should handle undefined', () => {
  expect(
    connection(undefined, {}),
  ).toEqual(initialState);
});

