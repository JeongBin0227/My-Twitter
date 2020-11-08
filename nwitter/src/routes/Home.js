import React, { useState } from "react"
import { dbService } from "fbase"
const Home = () => {
  const [nweet, setNweet] = useState("")
  const onSubmit = (event) => {
    event.preventDefault()
    // await dbService.collection("nweets").add({
    // nweet,
    // createAt: Date.now(),
    // })
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
    </div>
  )
}
export default Home
