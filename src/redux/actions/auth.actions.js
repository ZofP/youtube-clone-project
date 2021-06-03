import firebase from "firebase/app"
import auth from "../../firebase"
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionType"

export const login = () => async dispatch => {
 try {

  dispatch({ type: LOGIN_REQUEST })

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")

  const response = await auth.signInWithPopup(provider)


  const accessToken = response.credential.accessToken

  const profile = {
   name: response.additionalUserInfo.profile.name,
   photoURL: response.additionalUserInfo.profile.picture
  }

  sessionStorage.setItem("youtube-clone-accessToken", accessToken)
  sessionStorage.setItem("youtube-clone-user", JSON.stringify(profile))



  dispatch({
   type: LOGIN_SUCCESS,
   payload: accessToken
  })

  dispatch({
   type: LOAD_PROFILE,
   payload: profile
  })

 } catch (error) {
  console.log(error.message);
  dispatch({
   type: LOGIN_FAIL,
   payload: error.message
  })
 }
}

export const logout = () => async dispatch => {

 await auth.signOut()

 dispatch({ type: LOG_OUT })
 sessionStorage.removeItem("youtube-clone-accessToken")
 sessionStorage.removeItem("youtube-clone-user")

}