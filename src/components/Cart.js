import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { CartState } from '../context/Context'
import Rating from './Rating'

function Cart() {

    const {
        state:{cart},
        dispatch
    }=CartState()

    const[total, setTotal]= useState()
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=> acc+ Number(curr.price),0));
    },[cart])

    return (
        <div className='home'>
            <div className='productContainer'>
                <ListGroup>
                  {  cart.map((prod)=>(           
                        <ListGroup.Item>
                        <Row>
                            <Col md={2}>
                              <Image src={prod.image} fluid rounded/>
                            </Col>
                            <Col md={2}>
                                <span>{prod.name}</span>
                            </Col>
                            <Col md={2}>$ {prod.price}</Col>
                            <Col md={2}> <Rating rating= {prod.ratings} /></Col>
                            <Col md={2}>
                                <Form.Select as="select" value={prod.qty}
                                    onChange={(e)=>
                                        dispatch({
                                            type: "CHANGE_CART_QTY",
                                            payload:{
                                                id : prod.id,
                                                qty: e.target.value,
                                            },
                                        })
                                    }
                                >
                                    {[...Array(prod.inStock).keys()].map((x)=>(
                                        <option key={x+1}> {x+1} </option>
                                    ))
                                    }      
                                </Form.Select>
                            </Col>
                            <Col>
                            <AiFillDelete 

                                 fontSize="30px"
                                 style={{cursor:'pointer' , color:"red"}}
                                 onClick={()=>dispatch({
                                     type: "REMOVE_FROM_CART",
                                     payload: prod,
                                 })}
                                            />
                            </Col>
                        </Row>
                        </ListGroup.Item>
                 ))}
                </ListGroup>
            </div>
            <div className='filters summery'>
                    <span className='title'>
                        subtotal ({cart.length}) items
                    </span>
                    <span style={{fontWeight:700, fontSize:20}}> TOtal : ${total} </span>
                    <Button type='button' disabled={cart.length===0}>
                        Proceed to Checkout
                    </Button>
            </div>
        </div>
    )
}

export default Cart
