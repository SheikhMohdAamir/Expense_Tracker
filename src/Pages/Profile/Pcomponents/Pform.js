import React from 'react'
import { useRef } from 'react'
import { useContext } from 'react';
import CartContext from '../../ContextAPI/cart-context';
import axios from 'axios';

const Pform = () => {

    const api = useContext(CartContext)
    
    const fName = useRef('');
    const photo = useRef('');

    const profileUpdateHandler = async(event) => {
        event.preventDefault()
        const fNameValue = fName.current.value
        const photoValue = photo.current.value
        const idToken = api.token
        
        try{
            const resolve = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBvPlrcP-qrxgVmLiysw_vxDD-3g1jj1W8',{idToken:idToken, displayName:fNameValue, photoUrl:photoValue, returnSecureToken:true})
            const data = resolve.data
            console.log('In Profile Form', data)
        }
        catch(error){
            console.log('In Profile Form', error)
        }
      
        fName.current.value = ''
        photo.current.value = ''

    }

  return (
    <div className='container-sm ' style={{paddingLeft:'400px',paddingRight:'400px',paddingTop:'100px'}}>
        <form onSubmit={profileUpdateHandler}> 
        <div className="mb-3">
            <label htmlFor="exampleInputEmail0" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleInputEmail0" aria-describedby="emailHelp" ref={fName} required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail00" className="form-label">Profile Photo Url</label>
            <input type="text" className="form-control" id="exampleInputEmail00" aria-describedby="emailHelp" ref={photo} />
        </div>
        <button type="submit" className="btn" style={{backgroundColor:'#6f42c1',color:'white'}}>Update</button>
        </form>
      
    </div>
  )
}

export default Pform
