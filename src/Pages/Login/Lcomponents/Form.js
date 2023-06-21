import React from 'react'
import { useRef } from 'react'
import axios from 'axios'

const Form = () => {
    let refEmail = useRef('')
    let refPassword = useRef('')
    let refConfirmPassword = useRef('')

    const submitHandler = async(event) => {
        event.preventDefault()
        const inputEmail = refEmail.current.value
        const inputPassword = refPassword.current.value
        const inputConfirmpassword = refConfirmPassword.current.value
       
        if(inputPassword!==inputConfirmpassword){
            alert('Password Did Not Match!')
        }
        else{
            try{
                const resolve = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvPlrcP-qrxgVmLiysw_vxDD-3g1jj1W8',{email:inputEmail,password:inputPassword,returnSecureToken:true})
                const data = resolve.data
                console.log(data)
            }
            catch(error){
                alert(error.response.data.error.message)
            }
        }
    }


  return (
    <div className='container-sm ' style={{paddingLeft:'400px',paddingRight:'400px',paddingTop:'100px'}}>
      <h3 style={{color:'#6f42c1', textAlign:'center'}}>Sign Up!</h3>
      <br/>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={refEmail} required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" ref={refPassword} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="exampleInputPassword2" ref={refConfirmPassword} required />
        </div>
        
        <button type="submit" className="btn" style={{backgroundColor:'#6f42c1',color:'white'}}>Sign Up</button>
      </form>
    </div>
  )
}

export default Form
