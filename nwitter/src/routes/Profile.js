import React, { useEffect } from "react"
import { auth } from "firebase"
import { authService, dbService } from "fbase"
import { useHistory } from "react-router-dom"

const Profile = () => {
  const history = useHistory()
  const onLogOutClick = () => {
    authService.signOut()
    history.push("/")
  }
  const getMyNweets = async () => {
    const nweets = await dbService.collection("nweets").where("creatorId", "==", userObj.uid).orderBy("createdAt").get()
  }

  useEffect(() => {
    getMyNweets()
  },[])
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  )
}
export default Profile
