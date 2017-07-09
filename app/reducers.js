// import actions here
import {
    REQUEST_AUTHENTICATION,
    AUTHENTICATION_FAILURE,
    AUTHENTICATION_SUCCESS,
    PIN_UPDATE,
    EMAIL_UPDATE
} from './actions'

const initialState = {
    pin: '',
    email: '',
    name: '',
    error: null,
    authenticating: false,
    userAuthenticated: false
}

export default function rootReducer(state = initialState, action){
  switch (action.type) {
    case REQUEST_AUTHENTICATION:
      return {...state, authenticating: action.authenticating}
    case AUTHENTICATION_FAILURE:
      return {...state, authenticating: action.authenticating, error: action.error}
    case AUTHENTICATION_SUCCESS:
      return {...state, authenticating: action.authenticating, userAuthenticated: action.userAuthenticated }
    case PIN_UPDATE:
      return {...state, pin: action.pin }
    case EMAIL_UPDATE:
      return {...state, email: action.email }

    default:
      return state
  }
}