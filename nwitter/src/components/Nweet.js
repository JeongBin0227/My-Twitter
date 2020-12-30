import { dbService, storageService } from 'fbase'
import React, { useState } from 'react'

const Nweet = ({ newetObj, isOwner }) => {
  const [editing, setEditing] = useState(false)
  const [newNweet, setNewNweet] = useState(newetObj.text)

  const onDeleteClick = async () => {
    const ok = confirm('Are you sure you want to  delete this nweet?')
    if (ok) {
      await dbService.doc(`nweets/${newetObj.id}`).delete()
      await storageService.refFromURL(newetObj.attachmentUrl).delete()
    } else {
    }
  }

  const toggleEditing = () => setEditing((prev) => !prev)
  const onSubmit = async (event) => {
    event.preventDefaulet()
    await dbService.doc(`nweests/${newetObj.id}`).update({
      text: newNweet,
    })
    setEditing(false)
  }
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your nweet"
              value={newNweet}
              required
            />
          </form>
          <button onClick={toggleEditing}>cancel</button>
        </>
      ) : (
        <>
          <h4>{newetObj.text}</h4>
          {newetObj.attachmentUrl && (
            <img src={newetObj.attachmentUrl} width="50px" height="50px" />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  )
}
export default Nweet
