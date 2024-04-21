import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"

const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <img src="https://images.pexels.com/photos/247298/pexels-photo-247298.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button>
        </div>
        <div className='row'>
          <img src="https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <button>
            <Link className="link" to="/products/1">Women</Link>
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img src="https://images.pexels.com/photos/19118036/pexels-photo-19118036/free-photo-of-brunette-woman-posing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <button>
            <Link className="link" to="/products/1">New Season</Link>
          </button>
        </div>
      </div>
      <div className='col col-1'>
        <div className='row'>
          <div className='col'>
            <div className="row">
              <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
              <button>
            <Link className="link" to="/products/1">Men</Link>
          </button>
            </div>
          </div>
          <div className='col'>
            <div className="row">
              <img src="https://images.pexels.com/photos/2468231/pexels-photo-2468231.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
              <button>
            <Link className="link" to="/products/1">Accessories</Link>
          </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <img src="https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <button>
            <Link className="link" to="/products/1">Shoe</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories