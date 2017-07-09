import axios from 'axios'
export const REQUEST_AUTHENTICATION= 'REQUEST_AUTHENTICATION'
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS'
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE'
export const PIN_UPDATE = 'PIN_UPDATE'
export const EMAIL_UPDATE = 'EMAIL_UDPATE'

// const ROOT_URL = `https://odr-call-center.herokuapp.com/mobile_api/`
const ROOT_URL = `https://4ba57c8a.ngrok.io/mobile_api`

// ******************* ACTION CREATORS ******************* 

export function updatePin(pin){
  return dispatch => {
    dispatch(pinUpdate(pin))
  }
}

export function updateEmail(Email){
  return dispatch => {
    dispatch(emailUpdate(Email))
  }
}

export function authenticateUser(pin,email){
  return dispatch => {
    dispatch(requestAuthentication())
    return axios.post(`${ROOT_URL}/api_base/authenticate_user`, { pin: pin, email: email})
    .then(response => {
      console.log('response from api_authenticate', response)

      })
      .catch(error => {
        console.log(error)
        if(error.response){
          if(error.response.data){
            let error_message = error.response.data.error 
            console.log('************** THERE WAS AN ERROR **************', error)
            dispatch(authenticationFailure(error_message))
          } else {
            dispatch(authenticationFailure('Problem with server'))
          } 
        } else {
          dispatch(authenticationFailure('Problem with server'))
        }
    })
  }
}

// ******************* ACTIONS *******************

function requestAuthentication(){
  return { type: REQUEST_AUTHENTICATION, authenticating: true, error: null }
}

function authenticationSuccess(response) {
  return { type: AUTHENTICATION_SUCCESS, userAuthenticated: true }
}

function authenticationFailure(error){
    return { type: AUTHENTICATION_FAILURE, userAuthenticated: false, error: error}
}

function pinUpdate(pin) {
  return { type: PIN_UPDATE, pin: pin, userAuthenticated: false, error: null }
}

function emailUpdate(email) {
  return { type: EMAIL_UPDATE, email: email, userAuthenticated: false, error: null }
}