import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils"

const Signin = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    //console.log()
    const userDocRef = await createUserDocumentFromAuth(response.user)
  }
  return (
    <Fragment>
      <Outlet />
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </Fragment>
  )
}

export default Signin
