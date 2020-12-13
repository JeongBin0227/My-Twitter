import React from 'react'

const Nweet = ({newetObj, isOwner})=> (
    <div>
        <h4>{newetObj.text}</h4>
        {isOwner && (
            <>
                <button>Delete Nweet</button>
                <button>Edit Nweet</button>
            </>
        )}
    </div>
)

export default Nweet