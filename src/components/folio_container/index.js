import React from 'react'
import './style.css'
import arrow_up from '../../arrow_up.png'
import { useNavigate } from 'react-router-dom'

const Folio_Container = () => {
  const navigate= (url) => {
    // window.location.href(url)
    window.open(url)
  }

  const pages = [
    {},
    {
      url: 'https://saipepu.github.io/just_do_it/',
      name: 'Just_do_it'
    },
    {
      url: 'https://saipepu.github.io/multi_img_intro/',
      name: 'Multiple Images Intro'
    },
    {
      url: 'https://saipepu.github.io/multipleImagesOverlay/',
      name: 'Multiple Images Overlay'
    }
  ]

  return (
    <div className="folio_container">
      {pages.map((item,index) => (
        <>
        <div className="column" onClick={() => navigate(item.url)}>
          {item.name}
          <img src={arrow_up} alt="arrow_up" />
        </div>
        </>
      ))}
    </div>
  )
}

export default Folio_Container
