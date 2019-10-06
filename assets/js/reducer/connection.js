import {
  CONNECTION_ERROR,
  CONNECTION_OK
} from '../action'

const initialState = {
  joined: false,
  hasErrors: false,
  message: ""
}

const connection = (state = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case CONNECTION_OK:
      return {...state, ...{
        joined: true,
        hasErrors: false,
        message: `Joined successfully ${action.payload.room}`
      }}
    case CONNECTION_ERROR:
      return {...state, ...{
        joined: false,
        hasErrors: true,
        message: `Unable to join ${action.payload.room}`
      }}
    default:
      return state
  }
}

export { initialState }
export default connection
