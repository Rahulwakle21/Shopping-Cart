import React from 'react'
import {AiFillStar ,AiOutlineStar} from 'react-icons/ai'
function Rating({rating, onClick, style}) {
    return (
        <div>
            {
                [...Array(5)].map((_,i)=>{
                    return(
                        <span key={i} onClick={()=>onClick(i)} style={style}>
                        {rating > i ?(
                            <AiFillStar style={{fontSize:"15px"}} color='white' />
                        ):(
                            <AiOutlineStar color='white'  style={{fontSize:"15px"}}/>
                        )}
                    </span>    
                    )
                    
                })
            }
        </div>
    )
}

export default Rating
