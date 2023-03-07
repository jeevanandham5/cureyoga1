import { Divider } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import '../login.css'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Login = () => {
  return (
    <>
    <div className="login">
        <div className='container'>
            <h1>CUREYOGA</h1>
            <Divider/>
            <h2> MEMBER LOGIN</h2>
            <div className='inputlist'>
                <div className='list'>
            <label className='lable'>Username or Email</label>
            <TextField id="outlined-basic" label="" variant="outlined"  className='input'/>
            </div>
            <div className='list'>
            <label className='lable'>Password</label>
            <TextField id="outlined-basic" label="" variant="outlined" className='input' />
            <h5>Forgotpassword?</h5>
            </div>
            <div className='list'>
            <h5>Remember me</h5>
            <Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
      

<Button variant="contained" size="large">
          LOGIN
        </Button>
        <Divider/>
        <h5>view membership planes</h5>
        
       
</div>
            </div>
            
        </div>
    </div>
    </>

  )
}

export default Login