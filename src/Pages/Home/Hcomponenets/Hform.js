import React from 'react'
import { useRef } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import CartContext from '../../ContextAPI/cart-context'

const Hform = () => { 

    const api = useContext(CartContext)

    const amount = useRef('')
    const category = useRef('')
    const desc = useRef('')
    
    const transactionHandler = async(event) => {
        console.log(typeof(api.editToken))
        const inputAmount = amount.current.value
        const inputCategory = category.current.value
        const inputDesc = desc.current.value
        if(!api.edit){
            try{
              const resolve = await axios.post('https://expense-tracker--signup-page-default-rtdb.firebaseio.com/transactions.json',{amount:inputAmount, category:inputCategory, description: inputDesc})
              const data = resolve.data
              console.log(data)
            }
            catch(error){
                alert('Authentication Failed')
            }
        }
        else{
            try{
              await axios.put(`https://expense-tracker--signup-page-default-rtdb.firebaseio.com/transactions/${api.editToken}.json`,{amount:inputAmount, category:inputCategory, description: inputDesc}) 

          }
            catch(error){
                alert('Request Failed')
            }
        }
        

        amount.current.value = ''
        desc.current.value = ''
      

    }


  return (
    <div style={{width:'40%', float:'right', paddingRight:'60px',paddingTop:'40px'}}>

                                 {/* TRANSACTION */}

      <h3 style={{color:'#6f42c1', textAlign:'center'}}>Transaction</h3>
      <form onSubmit={transactionHandler}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail00" className="form-label">Amount</label>
            <input type="number" className="form-control" id="exampleInputEmail00" aria-describedby="emailHelp" ref={amount} required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword21" className="form-label">Category</label>
            <select className="form-select form-select-sm" aria-label=".form-select-sm example" id='exampleInputPassword21' ref={category}>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Bills">Bills</option>
              <option value="Other">Other</option>
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword00" className="form-label">Description</label>
            <input type="text" className="form-control" id="exampleInputPassword00" ref={desc} required />
        </div>
        <button type="submit" className="btn" style={api.edit?{backgroundColor:'#0dcaf0',color:'white'}:{backgroundColor:'#6f42c1',color:'white'}}>{api.edit?'Save Changes': 'Make Transaction'}</button>
      </form>
      </div >
  )
}

export default Hform
