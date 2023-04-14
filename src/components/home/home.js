import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { FormLabel,RadioGroup,FormControlLabel,Radio} from '@mui/material';
function Home() {

  const [name, setName] = useState('');
  const [party, setParty] = useState('BRS');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePartyChange = (e) => {
    setParty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/vote',{
      name: e.target.name.value,
      type: e.target.type.value,
     }).then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    
  };
//check

const [vote, setVote] = useState([])
    
useEffect(() => {
  console.log(
      ' BRS wins'
  )
  axios.get("http://localhost:5000/vote")

  
  .then(res => {
      console.log("sucess",res.data)
      setVote(res.data)
  }).catch(err => {
      console.log(err)
  })
}, [])






  return (
    <Box component="form" margin='40px' textAlign='center'>
      <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={handleNameChange} />
      <br/>
      <br/>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Party</FormLabel>
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" value={party} onChange={handlePartyChange}>
          <FormControlLabel value="BRS" control={<Radio />} label="BRS" />
          <FormControlLabel value="BJP" control={<Radio />} label="BJP" />
          <FormControlLabel value="CONGRESS" control={<Radio />} label="Congress" />
        </RadioGroup>
      </FormControl>
      <br/>
      <button type='sumbit' onClick={handleSubmit}>Submit</button>
      <br/>
      {vote}
    </Box>

  )
}

export default Home 

