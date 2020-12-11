import React, { useEffect, useState } from "react"
import { dbService } from "fbase"
const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("")
  const [nweets, setNweets] = useState([])
  const getNweets = async () => {
    const dbNweets = await dbService.collection("nweets").get()
    dbNweets.forEach((document) => {
      const nweetObject = {
        ...document.data(),
        id: document.id,
      }
      setNweet((prev) => [document.data(), ...prev])
    })
  }
  useEffect(() => {
    getNweets()
    dbService.collection('nweets').onSnapshot( (snapshot)=>{
      const nweetArray = snapshot.docs.map((doc)=>({
          id = doc.id,
          ...doc.data()
        }))
        setNweets(nweetArray)
      })
  },[])
  const onSubmit = (event) => {
    event.preventDefault()
    await dbService.collection("nweets").add({
    nweet,
    createAt: Date.now(),
    creatorId: userObj.uid,
    })
  }
  setNweet("")

  const onChange = (event) => {}
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value="nweet"
          onChange={onChange}
          placeholder="What's on your mind"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <div>
            <h4>{nweet.nweet}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home
