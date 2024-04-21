import React from 'react'
import Card from "../Card/Card"
import "./FeaturedProducts.scss"

const FeaturedProducts = ({type}) => {

const data = [
  {
    id:1,
    img:"https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=800",
    img2:"https://images.pexels.com/photos/1187950/pexels-photo-1187950.jpeg?auto=compress&cs=tinysrgb&w=800",
    title:"Long Sleeve Shirt",
    isNew:"true",
    oldPrice: 19,
    price: 12,
  },
  {
    id:2,
    img:"https://images.pexels.com/photos/2755612/pexels-photo-2755612.jpeg?auto=compress&cs=tinysrgb&w=800",
    img2:"",
    title:"Brown Coat",
    isNew:"true",
    oldPrice: 19,
    price: 12,
  },
  {
    id:3,
    img:"https://images.pexels.com/photos/3769148/pexels-photo-3769148.jpeg?auto=compress&cs=tinysrgb&w=800",
    title:"Fur Coat",
    isNew:"",
    oldPrice: 19,
    price: 12,
  },
  {
    id:4,
    img:"https://images.pexels.com/photos/2069243/pexels-photo-2069243.jpeg?auto=compress&cs=tinysrgb&w=800",
    title:"Black Jacket",
    isNew:"",
    oldPrice: 19,
    price: 12,
  },
]

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>Discover our handpicked selection of top-rated products, carefully curated to bring you the best of what our store has to offer. From cutting-edge technology to timeless classics, we have something for everyone. Explore our featured products below and find your new favorites today!</p>
      </div>
      <div className='bottom'>
        {data.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts