import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1805411/pexels-photo-1805411.jpeg?auto=compress&cs=tinysrgb&w=800",
      img2: "https://images.pexels.com/photos/3007759/pexels-photo-3007759.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Long Sleeve Graphic T-shirt",
      desc: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3641425/pexels-photo-3641425.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Coat",
      desc: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12
    }
]

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map(item=>(
        <div className='item' key={item.id}>
          <img src={item.img} alt="" />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className='price'>1 x ${item.price}</div>
          </div>
          <DeleteOutlineIcon className='delete'/>
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart