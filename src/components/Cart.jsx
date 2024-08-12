// src/components/Cart.js
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { decrementQuantity, incrementQuantity, removeFromCart } from "../redux/cartSlice";
const Cart = () => {
  const cart = useSelector((state) => state.cartslice.cart);
  const dispatch=useDispatch();

  let subtotal = useMemo(() =>{
    var sum = 0;
    cart.forEach((element) => {
    sum += element.price * element.quantity;
    })
     return sum
    }, [cart]);

  const total = subtotal ? subtotal+20:0;

  return (
    <div>
      <h2 className="cart_title">Cart</h2>
      {cart.length === 0 ? (
        <p className="cart_title">No items in cart</p>
      ) : (
        <div className="cart">
          <div className="cart_list">
            {cart.map((product, index) => (
              <div className="cart_item" key={index}>
                <img src={product.image} />
                <div className="item_des">
                  <h3>{product.title}</h3>
                  <div>
                    <button onClick={()=>(dispatch(incrementQuantity(product)))}>+</button>
                    <p>{product.quantity}</p>
                    <button onClick={()=>( product.quantity ==1 ? dispatch(removeFromCart(product)): dispatch(decrementQuantity(product)))}>-</button>
                  </div>
                  <p>Price: ${product.price.toFixed(2)}</p>
                  <button onClick={()=>dispatch(removeFromCart(product))}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="price_Details">
            <h1>Price Details:</h1>
            <h3>
              SubTotal: <span> </span>${subtotal.toFixed(2)}
            </h3>
            <p>{`(${cart.length} items)`}</p>
            { {total} && <h3>
              Delivery Fees:{"$20"}
            </h3>}
            <h3>
              Total:<span> </span> ${total.toFixed(2)}
            </h3>
            <button className="checkout" onClick={()=>toast("checked out")}>
              Checkout
            </button> 
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
