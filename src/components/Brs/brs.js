import React,{useEffect,useState} from 'react'
import { Box, Typography } from '@mui/material'
import axios from 'axios'

function Brs() {
 
  const [vote, setVote] = useState('')
    
  useEffect(() => {
    console.log(
        ' BRS wins'
    )
    axios.get("http://localhost:5000/result?vote=brs")

    
    .then(res => {
        console.log("sucess",res.data.result)
        setVote(res.data.result)
    }).catch(err => {
        console.log(err)
    })
}, [])
  return (
<Box textAlign='center' marginTop='100px' color='red'>
      <Typography variant="h3" component="h2">
        welcome to BRS Party
      </Typography>
     <img alt='brs' src='https://www.telugu360.com/wp-content/uploads/2023/01/BRS.jpg'/>
     <br/>
     <button type='sumbit'>sucess</button>
     {vote}
    </Box>
    

  )
}

export default Brs