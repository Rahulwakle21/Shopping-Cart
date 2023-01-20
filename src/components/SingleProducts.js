import React from 'react'
import { Card } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

export default function SingleProducts({prod}) {

    const{state: {cart}, dispatch,}=CartState()
    // console.log(cart)
    return (
        <div className='products'>
            <Card>
                <Card.Img variant='top' src={prod.image} alt={prod.name}/>
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle style={{paddingBottom:"10px"}}>
                        <span>$ {prod.price.split(".")[0]}</span>
                        {
                            prod.fastDelivery ?( 
                                <div>Fast Deliveruy</div>
                            ):(
                                <div>4 Days Delivery</div>
                            )
                        }
                        <Rating  ratings={prod.ratings}/>
                    </Card.Subtitle>
                    {
                        cart.some((p)=>p.id=== prod.id)             //some check the perticular thing exist or not
                           ?( <button onClick={()=>{
                            dispatch({
                                type:'REMOVE_FROM_CART',
                                payload:prod,
                            })
                        }}  className='btn btn-danger'> Remove From Cart</button>)
                           :( 
                            <button onClick={()=>{
                                dispatch({
                                    type:'ADD_TO_CART',
                                    payload:prod,
                                })
                            }} disabled={!prod.inStock} className='btn btn-primary'> 
                            {!prod.inStock ? "out Of Stock" : "Add to Cart" }
                            </button>
                           ) 
                    }
                   
 
                 
                </Card.Body>
            </Card>
        </div>
    )
}
