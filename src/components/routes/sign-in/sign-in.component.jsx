import { Fragment } from "react"
import { Outlet } from "react-router-dom"
const Signin = () => {
  return (
    <Fragment>
      <Outlet />
      <div>Hi im SIGNIN</div>
    </Fragment>
  )
}

export default Signin
