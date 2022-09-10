import React from 'react'
import './style.css'
import arrow_up from '../../arrow_up.png'
import { useNavigate } from 'react-router-dom'
import img1 from '../../assets/JUST_DO_IT.png'
import img2 from '../../assets/multiple_img_intro.png'
import img3 from '../../assets/multiple_img_overlapping.png'
import img4 from '../../assets/project_section_hovering.png'
import img5 from '../../assets/scatter_text.png'

const Folio_Container = () => {
  const navigate= (url) => {
    // window.location.href(url)
    window.open(url)
  }

  const pages = [
    {},
    {
      url: 'https://saipepu.github.io/just_do_it/',
      name: 'Just_do_it',
      image: img1
    },
    {
      url: 'https://saipepu.github.io/multi_img_intro/',
      name: 'Multiple Images Intro',
      image: img2
    },
    {
      url: 'https://saipepu.github.io/multipleImagesOverlay/',
      name: 'Multiple Images Overlay',
      image: img3
    },
    {
      url: '',
      name: 'Project Section Hovering',
      image: img4
    },
    {
      url: '',
      name: 'Scatter Text',
      image: img5
    }
  ]

  return (
    <div className="folio_container">
      {pages.map((item,index) => (
        <>
        <div className="column" onClick={() => navigate(item.url)}>
          <div className="backgroundImg">
            <img src={item.image} alt="preview_image" />
          </div>
          <img class="arrow" src={arrow_up} alt="arrow_up" />
        </div>
        </>
      ))}
    </div>
  )
}

export default Folio_Container
