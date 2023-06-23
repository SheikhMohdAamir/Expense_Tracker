import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useContext } from 'react';
import CartContext from '../../ContextAPI/cart-context';

const Itemlist = () => {
    const [getRequestData, setGetRequestData] = useState([])

    const api = useContext(CartContext)

    let arr = [] ;

    const itemlistHandler = async() => {
        try{
            const resolve = await axios.get('https://expense-tracker--signup-page-default-rtdb.firebaseio.com/transactions.json')
            const data = resolve.data
            for(let key in data){
                arr.push({
                    id:key,
                    amount:data[key].amount,
                    category:data[key].category,
                    description:data[key].description
                })
            }
            setGetRequestData(arr)

        }
        catch(error){
            console.log('In Itemlist', error)
        }
    }
    
    const deleteRequestHandler = async(item) =>{
        try{
            await axios.delete(`https://expense-tracker--signup-page-default-rtdb.firebaseio.com/transactions/${item}.json`) 

        }
        catch(error){
            alert('Request Failed')
        }
    }

    //figure it out
    const putRequestHandler = async(id) =>{
        
        api.editHandler(id)
    }
    

  return (
    <div style={{width:'40%', float:'left', paddingLeft:'60px',paddingTop:'40px'}}>

                                                    {/* HISTORY */}

      <h3 style={{color:'#6f42c1', textAlign:'center'}}>History <button type="button" className="btn btn-sm" style={{backgroundColor:'#6f42c1',color:'white'}} onClick={itemlistHandler} >🡇</button></h3>
        <ol className="list-group list-group-numbered">{getRequestData.map(i => 
            <li className="list-group-item d-flex justify-content-between align-items-start" key={i.id}>
                <div className="ms-2 me-auto">
                <div className="fw-bold">{i.description} <button type="button" className="btn btn-danger" style={{borderRadius:'100px', border:'0', fontSize:'9px'}} onClick={()=>deleteRequestHandler(i.id)} >X</button>   
                <button type="button" className="btn btn-info" style={{borderRadius:'100px', border:'0', fontSize:'9px'}} onClick={()=>putRequestHandler(i.id)}>✎</button>
                </div>
                {i.category}
                </div>
                <span className="badge badge-lg" style={{backgroundColor:'#6f42c1', textAlign:'right'}}>Rs.{i.amount}</span>
                
                
            </li>
            )}
        </ol>
    </div>
  )
}

export default Itemlist

