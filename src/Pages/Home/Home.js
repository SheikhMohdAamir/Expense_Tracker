import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import CartContext from '../ContextAPI/cart-context'

const Home = () => {

  const api = useContext(CartContext)
  const idToken = api.token

  const emailVerificationHandler = async() => {
      try{
        const resolve = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBvPlrcP-qrxgVmLiysw_vxDD-3g1jj1W8',{requestType:"VERIFY_EMAIL", idToken:idToken})
        const data = resolve.data
        console.log('In Home', data)
      }
      catch(error){
        alert('Authentication Failed')
      }
  }

  return (
    <div >
      <div style={{backgroundColor:'#6f42c1',color:'white'}}>
        <h3 style={{textAlign:'center'}}>Welcome to Expense Tracker! </h3>
        <p>Your Profile Is Incomplete!<NavLink to='/profile'>Complete Now</NavLink></p>
        <hr />
      </div>
      <div className='container-fluid'>
        <button type="button" className="btn" style={{backgroundColor:'#6f42c1',color:'white'}} onClick={emailVerificationHandler}>Verify Your Email</button>
      </div>  
      
    </div>
  )
}

export default Home
