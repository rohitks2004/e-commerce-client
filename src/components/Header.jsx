/* eslint-disable react/prop-types */

import { /*useDispatch ,*/ useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
// import { decrement, increment } from "../redux/counterSlice";

const Header = ({setShowLoginSignup}) => {
  
    const cart = useSelector(state => state.cartslice.cart)
    const cart_length = cart.length;
    const page = useLocation().pathname;
    // console.log(page)
    // const count = useSelector(state => state.counter.count);
    // const dispatch = useDispatch();

// console.log(cart)

  return (
    <div className="header">
      <div className="navbar">
              <h1>PRODUCTS</h1>
              <div className="nav">
                 <Link to={'/'}>  <p className={`${page =='/'? 'active':""}`}>Products</p></Link>
                 <Link to={'/about'}> <p className={`${page =='/about'? 'active':""}`}>About</p></Link>
                 <Link to={'/cart'}> <p className={`${page =='/cart'? 'active':""}`}>Cart : {cart_length} </p></Link>
                 <button onClick={()=>{setShowLoginSignup(true)}}>Login</button>
                  {/* <p onClick={()=>dispatch(increment(5))}>+</p>
                  <p>{count }</p>
                  <button onClick={()=>dispatch(decrement(5))}>-</button> */}
              </div>
      </div>
    </div>
  )
}

export default Header
