import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const Home = () => {
  return (
    <div>
      <div style={{backgroundColor:'#6f42c1',color:'white'}}>
        <h3>Welcome to Expense Tracker! </h3>
        <p>Your Profile Is Incomplete!<NavLink to='/profile'>Complete Now</NavLink></p>
        <hr />
      </div>
      
      
    </div>
  )
}

export default Home
