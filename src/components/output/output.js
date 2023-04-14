import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Output() {
    const [vote, setVote] = useState('')
    
  useEffect(() => {
    console.log(
        'wins'
    )
    axios.get("http://localhost:5000/all-result")

    
    .then(res => {
        console.log("resssss",res.data)
        setVote(res.data)
    }).catch(err => {
        console.log(err)
    })
}, [])

  return (
    
    <div>
      <center>
        <h1>RESULT</h1>
       
       {/* {vote.bjp}
      {vote.brs}
       {vote.congress}
      */}
      <h1>votes for BRS</h1>
      {vote.brs}
      <br/>
      <h1>votes for BJP</h1>
      {vote.bjp}
      <br/>
      <h1>votes for CONGRESS</h1>
      {vote.congress}
      </center>
    </div>
  )
}

export default Output