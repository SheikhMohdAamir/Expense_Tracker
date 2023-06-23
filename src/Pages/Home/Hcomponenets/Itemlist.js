import React from 'react'
import { useContext } from 'react'
import CartContext from '../../ContextAPI/cart-context'

const Itemlist = () => {

    const api= useContext(CartContext)

  return (
    <div style={{width:'40%', float:'left', paddingLeft:'60px',paddingTop:'40px'}}>
      <h3 style={{color:'#6f42c1', textAlign:'center'}}>History</h3>
        <ol class="list-group list-group-numbered">{api.data.map(i => 
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-bold">{i.description}</div>
                {i.category}
                </div>
                <span class="badge badge-lg" style={{backgroundColor:'#6f42c1', textAlign:'right'}}>Rs.{i.amount}</span>
                
            </li>
            )}
        </ol>
    </div>
  )
}

export default Itemlist
