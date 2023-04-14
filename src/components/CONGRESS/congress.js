import React,{useEffect,useState} from 'react'
import { Box, Typography } from '@mui/material'
import axios from 'axios'

function Congress() {
  const [vote, setVote] = useState('')
    
  useEffect(() => {
    console.log(
        ' CONGRESS wins'
    )
    axios.get("http://localhost:5000/result?vote=congress")

    
    .then(res => {
        console.log("sucess",res.data.result)
        setVote(res.data.result)
    }).catch(err => {
        console.log(err)
    })
}, [])
  return (
    <Box textAlign='center' marginTop='100px' color='green'>
      <Typography variant="h3" component="h2">
        welcome to CONGRESS Party
      </Typography>
     <img alt='CONGRESS LOGO' src='https://5.imimg.com/data5/JD/QJ/VG/SELLER-6781751/p-3-500x500.png'/>
     <br/>
     {vote}
     
    </Box>
  )
}

export default Congress