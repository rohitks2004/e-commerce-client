import { useParams } from 'react-router-dom';

const Product = () => {
    const {productid} = useParams();
    console.log(productid)
  return (
    <div>{ `Productid: ${productid}`}</div>
  )
}

export default Product