import React from 'react'
import "./Footer.scss"

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>At ShopEase, we're more than just an e-commerce website - we're your digital marketplace companion, designed to enhance your shopping experience from the comfort of your home. Dive into a world of endless possibilities as you explore a curated selection of products ranging from trendy fashion to cutting-edge electronics, all at your fingertips.</span>
        </div>
        <div className='item'>
          <h1>Contact</h1>
          <span>Phone: 1-800-000-SHOPEASE
          <br />Email: support@shopease.com
          <br />Live Chat: Visit our website and chat with one of our representatives in real-time</span>
        </div>
      </div>
      <div className='bottom'>
        <div className="left">
          <span className="logo">ShopEase</span>
          <span className="copyright">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}
