import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../redux/productSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm , setSearchTerm] = useState('');

  const handleSearch= (e)=>{
    setSearchTerm(e.target.value);
  }
  return (
    <div className="search_bar">
        <input type="text"  onChange={handleSearch} />
        <button type="button" onClick={()=>(dispatch(search(searchTerm.toLowerCase())))}>Search</button>
    </div>
  )
}

export default SearchBar