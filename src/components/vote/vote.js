import React from 'react'
import './vote.css';
import axios from 'axios'
function Vote() {
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/vote', {
      voter_id: e.target.voter_id.value,
      vote: e.target.vote.value,
    }).then(res => {
      console.log(res.data)
    }
    ).catch(err => {
      console.log(err)
    })
  }
  return (



    <div className='box'>
      <center>
      <form onSubmit={handleSubmit}>
        <div className='model'>
        <label>voter_id:-</label>
        <input type='text' name='voter_id' placeholder='ENTER VOTER ID NUMBER' />
        <br/>
        <br/>
        <label className='left'>vote:-</label>
        <input  type='text' name='vote' placeholder='ENTER PARTY NAME(BRS,BJP,CONGRESS)' />
        <br />
        <br/>
        <button type='submit' style={{backgroundColor:'green'}}>Submit</button>
        </div>
      </form>
      </center>
    </div>

  )
}

export default Vote