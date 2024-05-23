import React from 'react'
import LockResetIcon from '@mui/icons-material/LockReset';
import './auth.css'

function Reset() {
  return <>

  <div className='signUp_page'>
    <div className='left_bar_auth'></div>
    <div className='right_bar_auth'>
      
      <p>Reset Your Password Here!</p>
      <div className='reset_icon'>
         <LockResetIcon/>
      </div>
      <form>
      
      <label htmlFor="password">New Password :</label>
      <input type="password" name="password"  />
      <label htmlFor="password">Confirm Password :</label>
      <input type="password" />
      
      <button type='submit'>Submit</button>
      </form>
      <h6>Remeber Your Password ?<span>SignIn Here</span></h6>
    </div>
  </div>
  
  </>
}

export default Reset;