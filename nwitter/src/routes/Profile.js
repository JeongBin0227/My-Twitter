import React, { useEffect, useState } from 'react'
import { auth } from 'firebase'
import { authService, dbService } from 'fbase'
import { useHistory } from 'react-router-dom'

const Profile = ({ userObj }) => {
  const history = useHistory()
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName)

  const onLogOutClick = () => {
    authService.signOut()
    history.push('/')
  }

  const getMyNweets = async () => {
    const nweets = await dbService
      .collection('nweets')
      .where('creatorId', '==', userObj.uid)
      .orderBy('createdAt')
      .get()
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (userObj.displayName !== newDisplayName) {
      const response = await userObj.updateProfile({
        displayName : newDisplayName
      })
      refreshUser()
    }
  }
  useEffect(() => {
    getMyNweets()
  }, [])
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChanege={onChanege}
          type="text"
          placeholder="Display Name"
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  )
}
export default Profile
