/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/productSlice";

const ProductList = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    getProducts()
  },[])

    const getProducts = async ()=>{
      const res = await axios.get(
        // "http://localhost:3000/products"
        "https://e-commerce-server-glo4.onrender.com/products"
      );
      console.log(res.data);
      dispatch(setProducts(res.data));

    }
    const items = useSelector((state) => state.productSlice.products)
  return (
    <>
    <SearchBar/>
      <div className="product">
       {!items.length ? <h1>No Items Found</h1> :  items.map((product,key) => (
            <ProductCard key={key} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
