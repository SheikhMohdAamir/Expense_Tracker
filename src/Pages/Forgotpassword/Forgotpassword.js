import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { useRef } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Forgotpassword = () => {
    const [isLoading, setIsLoading] = useState(false)

    const email = useRef('')

    const forgotPasswordHandler = async() => {
        setIsLoading(true)

        try{
            const resolve = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBvPlrcP-qrxgVmLiysw_vxDD-3g1jj1W8',{requestType:"PASSWORD_RESET",email:email.current.value})
            const data = resolve.data
            console.log('In Forgot Password',data)
        }
        catch(error){
            alert('Email Not Found!')
        }
        email.current.value = ''
        setIsLoading(false)
    }

  return (
    <div  className='container-sm ' style={{paddingLeft:'350px',paddingRight:'350px',paddingTop:'100px'}}>
        <h3 style={{color:'#6f42c1', textAlign:'center'}}>Forgot Password!</h3>
        <br />
        <form >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail5" className="form-label">Enter The Email With Which You Have Registered.</label>
                <input type="email" className="form-control" id="exampleInputEmail5" aria-describedby="emailHelp" ref={email} required />
            </div>

            <p style={{textAlign:'center'}}><NavLink to='/login'>Already A User! Login</NavLink></p>
            <button type="submit" className="btn" style={{backgroundColor:'#6f42c1',color:'white'}} onClick={forgotPasswordHandler}>{!isLoading?'Send Link':<div class="spinner-border " role="status"><span class="visually-hidden">Loading...</span></div>}</button>
        </form>
    </div>
  )
}

export default Forgotpassword
