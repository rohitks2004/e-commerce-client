/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

const ProductList = () => {
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
