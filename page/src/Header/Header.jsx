import React, { Component } from 'react'
import Main2 from '../Mainpart/Main2'
export default class Header extends Component {
  render() {
    return (
        <div className='header'>
      <div className='headerlogo'>
      <i className="fa-brands fa-facebook"></i>

 <i className="fa-brands fa-square-twitter"></i>
    <i className="fa-brands fa-pinterest"></i>
    </div>
    <div className='headerlogo2'>
    <i className="fa-solid fa-location-dot"> <p className='loc'>203 Madison Ave, NY, USA
ADDRESS</p></i>
    <i class="fa-regular fa-clock"> <p className='clock'>Monday - Friday 9am - 6pm
TIMEING</p></i>
<i class="fa-regular fa-envelope"><p className='email'>envato@gmail.com
MAIL TO US</p></i>
</div>
<div className='aghisse'>
       <ul>
        <li> Home</li>
        <li>About</li>
        <li> Pages</li>
        <li> Shop</li>
        <li> Blog</li>
        <li> Contact us</li>
       </ul>
       <i className="fa-solid fa-magnifying-glass"></i>
       <div className='book'>
        <p className='bookt'> Book Ticket</p>
       </div>
       <div className='imgdiv'>
        <img src='https://themecraze.net/html/volia/images/logo.png'></img>
       </div>
        </div>
      <Main2/>
      </div>
  
    
    )
  }
}
