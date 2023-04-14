import {Box,Typography} from '@mui/material'
import React,{useEffect,useState} from 'react'
import axios from 'axios'

function Bjp() {

  const [vote, setVote] = useState('')
    
  useEffect(() => {
    console.log(
        ' BJP wins'
    )
    axios.get("http://localhost:5000/result?vote=bjp")

    
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
      welcome to Bjp Party
      <br/>
      <br/>
     <img alt='bjp logo' width='500px' src='https://bjpgujarat.org/wp-content/uploads/2018/07/73yyaxgu.bmp'/> 
      </Typography>
      {vote}
    </Box>
  )
}

export default Bjp 