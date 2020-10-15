import React from "react"
import { auth } from "firebase"
import { authService } from "fbase"
import { useHistory } from "react-router-dom"

const Profile = () => {
  const history = useHistory()
  const onLogOutClick = () => {
    authService.signOut()
    history.push("/")
  }

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  )
}
export default Profile
