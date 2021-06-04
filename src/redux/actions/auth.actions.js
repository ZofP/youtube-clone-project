import firebase from "firebase/app"
import auth from "../../firebase"
import { ANONYMOUS_LOG_OUT, LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionType"

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

export const anonymousLogin = () => dispatch => {


 const anonymousUser = {
  profilePic: "",
  username: "Anonymous User",
  email: "",
  displayName: "Anonymous User",
  photoURL: "",
 }
 sessionStorage.setItem("youtube-clone-user", JSON.stringify(anonymousUser))

 dispatch({
  type: LOAD_PROFILE,
  payload: anonymousUser
 })


}

export const logout = () => async dispatch => {

 await auth.signOut()

 dispatch({ type: LOG_OUT })
 sessionStorage.removeItem("youtube-clone-accessToken")
 sessionStorage.removeItem("youtube-clone-user")

}
export const anonymousLogout = () => async dispatch => {


 dispatch({ type: ANONYMOUS_LOG_OUT })
 sessionStorage.removeItem("youtube-clone-accessToken")
 sessionStorage.removeItem("youtube-clone-user")

}