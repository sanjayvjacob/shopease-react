import React,{useState} from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedImg,setSelectedImg] = useState(0);
  const [quantity,setQuantity] = useState(1);

const images = [
  "https://images.pexels.com/photos/2181872/pexels-photo-2181872.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/19734973/pexels-photo-19734973/free-photo-of-portrait-of-a-woman-sitting.jpeg?auto=compress&cs=tinysrgb&w=800"
]

  return (
    <div className='product'>
      <div className='left'>
        <div className="images">
          <img src={images[0]} alt="" onClick={(e)=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={(e)=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className='right'>
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laborum hic ipsam natus impedit laboriosam odit totam voluptas aut quas, quis eos officia suscipit repellendus obcaecati temporibus adipisci dolorem ratione!</p>
        <div className='quantity'>
          <button onClick={()=> setQuantity(prev=>prev === 1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=> setQuantity(prev=>prev+1)}>+</button>
        </div>

        <button className='add'>
        <AddShoppingCartIcon/> ADD TO CART
        </button>

        <div className="links">
          <div className='item'>
          <FavoriteBorderIcon/> ADD TO WISH LIST
          </div>

          <div className='item'>
          <BalanceIcon/> ADD TO COMPARE
          </div>

        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
    </div>
  )
}

export default Product