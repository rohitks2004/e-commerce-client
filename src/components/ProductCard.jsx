/* eslint-disable react/prop-types */

import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartslice.cart);

  let inSideCart = useMemo(()=>{
    return cart.find((element)=> element.id ===product.id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cart])
  const getStars = (rating) => {
    const fullStars = "★".repeat(Math.floor(rating));
    const emptyStars = "☆".repeat(5 - Math.floor(rating));
    return fullStars + emptyStars;
  };

  return (
    <div className="box"key={product.id}>   
    <Link to={`/product/${product.id}`} >
      <div className="image">
        <img src={product.image} alt="product" />
      </div>
    </Link>
      <div className="des">
        <div className="des1">
          <h2>{product.title}</h2>
          <h3>{product.category}</h3>
        </div>
        <div className="des2">
          <h4>{getStars(product.rating.rate)}</h4>
          <p>{product.description}</p>
        </div>
        {inSideCart ? (
          <Link to={'/cart'}>
          <button className="goToCart">
            Go to Cart
          </button>
          </Link>
        ) : (
          <button className="addToCart" type="button" onClick={() =>{
          dispatch(addToCart(product))
          toast('added to cart')}
          }>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
