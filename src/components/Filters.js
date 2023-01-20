import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { CartState } from '../context/Context';
import Rating from './Rating'

export default function Filters() {
    // const[rate,setRate]= useState(4);   we use only reducer 

   const{productState:{sort,byStock,byFastDelivery,byRating,searchQuerry}, productDispatch}= CartState()
   console.log(sort,byStock,byFastDelivery,byRating,searchQuerry)
    return (
        <div className='filters sticky-top'>
            <span className='title'>Filter Product</span>
            <span>
                <Form.Check
                    inline
                    label="Low to High"
                    name="group1"
                    type='radio'
                    id={'inline-1'}
                    onChange={()=>
                        productDispatch({
                            type:"SORT_BY_PRICE",
                            payload: "lowToHigh",
                        })
                    }
                    checked={sort=== "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="High To Low"
                    name="group1"
                    type='radio'
                    id={'inline-2'}
                    onChange={()=>
                        productDispatch({
                            type:"SORT_BY_PRICE",
                            payload: "highToLow",
                        })
                    }
                    checked={sort=== "highToLow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Box"
                    name="group1"
                    type='checkbox'
                    id={'inline-3'}
                    onChange={()=>
                        productDispatch({
                            type:"FILTER_BY_STOCK",
                        })
                    }
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery only"
                    name="group1"
                    type='checkbox'
                    id={'inline-4'}
                    onChange={()=>
                        productDispatch({
                            type:"FILTER_BY_DELIVERY",
                        })
                    }
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label htmlFor="" style={{paddingRight:"10px"}}> Rating :</label>
                <Rating rating={byRating} onClick={(i)=>
                     productDispatch({
                        type: "SEARCH_BY_RATING",
                        payload:i+1,
                     })} style={{cursur:"pointer"}} />
            </span>
                <button className='btn btn-danger'
                     onClick={()=>
                        productDispatch({
                            type:"CLEAR_FILTER",
                        })
                    }
                >Clear Filter</button>
        </div>
    )
}
