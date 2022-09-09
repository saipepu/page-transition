import React, { useEffect } from 'react'
import './style.css'
import arrow from '../../arrow.png'

const Banner = () => {


  useEffect(() => {
    const text = document.querySelector('.circular-text')
    console.log(text)
    text.innerHTML = text?.textContent.replace(/\D/g,'<span>$&</span>')
    const element = document.querySelectorAll('.circular-text span')
    for(let i=0; i<element.length; i++) {
      element[i].style.transform = 'rotate('+i*18+'deg)';
    }
  },[])

  return (
    <div className="banner_container">
      <div className="cc_container">
        <p className="cc">inspired by<br />creative designers</p>
      </div>
      <div className="banner_title_container">
        <div className="banner_title">
          Simple<br /><span>But</span> not Plain
        </div>
        <div className="banner_subtitle">
          recreations of some elegant page transitions by amazing designers from 
        <a href="https://www.awwwards.com" target="_blank"> awwwards.com</a>
        </div>
      </div>
      <div className="circular-arrow-container">
        <div className="circular-text" id="circular-text">RECREATION BY PEPU</div>
        <img src={arrow} alt="arrow_vector" />
      </div>
    </div>
  )
}

export default Banner
