import { Navbar , Container, FormControl, Dropdown, Badge, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { CartState } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'
const Header = () =>{

    const{
        state:{cart},
        dispatch,
        productDispatch
    }  = CartState()

    return(
        <Navbar bg='dark' variant='dark' style={{height:'80'}}>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Shopping Cart </Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl 
                        style={{width:"500px"}}
                        placeholder='search Product'    
                        className='mg auto'
                        onChange={(e)=>{
                            productDispatch({
                                type:"FILTER_BY_SEARCH",
                            payload: e.target.value,
                            })
                        }}
                    />
                </Navbar.Text>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FaShoppingCart color="white"/>
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            cart.length >= 0
                             ?(
                                <>
                                {
                                    cart.map(prod=>(
                                        <span className='cartitem' key={prod.id}>
                                            <img src={prod.image} className="cartItemImage" alt="" />
                                            <div className='cartItemDetails'>
                                                <span>{prod.name}</span>
                                                <span>$  {prod.price.split(".")[0]}</span>
                                            </div>
                                            <AiFillDelete 
                                                fontSize="30px"
                                                style={{cursor:'pointer'}}
                                                onClick={()=>dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: prod,
                                                })}
                                            />
                                        </span>
                                    ))
                                }
                                <Link  to='/cart'>
                                    <Button style={{width:'80%',margin:"5px"}}>Go To Cart</Button>
                                </Link>
                                </>
                             )
                             :(  <span style={{padding:"10px"}}>Cart is Empty !</span>)
                        }
                     
                    </Dropdown.Menu>
                 </Dropdown>
            </Container>
        </Navbar>
    )
}

export default Header