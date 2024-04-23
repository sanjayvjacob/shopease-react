import React from 'react'
import "./List.scss"
import Card from "../Card/Card"

const List = () => {

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1805411/pexels-photo-1805411.jpeg?auto=compress&cs=tinysrgb&w=800",
    img2: "https://images.pexels.com/photos/3007759/pexels-photo-3007759.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Long Sleeve Graphic T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/3641425/pexels-photo-3641425.jpeg?auto=compress&cs=tinysrgb&w=800",
    img2: "",
    title: "",
    isNew: true,
    oldPrice: 19,
    price: 12
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/2181871/pexels-photo-2181871.jpeg?auto=compress&cs=tinysrgb&w=800",
    img2: "",
    title: "",
    isNew: true,
    oldPrice: 19,
    price: 12
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/19734976/pexels-photo-19734976/free-photo-of-a-woman-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=800",
    img2: "",
    title: "",
    isNew: true,
    oldPrice: 19,
    price: 12
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=800",
    img2: "",
    title: "",
    isNew: true,
    oldPrice: 19,
    price: 12
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/620074/pexels-photo-620074.jpeg?auto=compress&cs=tinysrgb&w=800",
    img2: "",
    title: "",
    isNew: true,
    oldPrice: 19,
    price: 12
  },
]

  return (
    <div className='list'>{data.map(item=>(
      <Card item={item} key={item.id}/>
    ))}</div>
  )
}

export default List