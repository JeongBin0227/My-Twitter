import { dbService } from 'fbase'
import React, { useState } from 'react'

const Nweet = ({newetObj, isOwner})=> {
    const [editing, setEditing] = useState(false)
    const [newNweet, setNewNweet] = useState(newetObj.text)
    
    const onDeleteClick = async () => {
        const ok= confirm("Are you sure you want to  delete this nweet?")
        if(ok){
            await dbService.doc(`nweets/${newetObj.id}`).delete()
        }else{

        }
    }

    const toggleEditing = () => setEditing((prev) => !prev)
    const onSubmit = (event) => {
        event.preventDefaulet()
    }
    return(
        <div>
            {
                editing ? (
                    <>
                        <form onSubmit={onSubmit}><input type="text" placeholder ="Edit your nweet" value={newNweet} required /></form>
                        <button onClick={toggleEditing}>cancel</button> 
                    </>
                ): 
                <>
                    <h4>{newetObj.text}</h4>
                    {isOwner && (
                        <>
                            <button onClick = {onDeleteClick} >Delete Nweet</button>
                            <button onClick = {toggleEditing} >Edit Nweet</button>
                        </>
                    )}
                </>
            }
        </div>
    )}
export default Nweet