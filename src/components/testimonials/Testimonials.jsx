import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const clientsData = [
  {
    id: 1,
    name: 'linda',
    image: AVTR1,
    title: 'client avatar 1',
    review: 'Heres a random text as a review for my work: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, repudiandae eveniet excepturi!'
  },
  {
    id: 2,
    name: 'ross',
    image: AVTR2,
    title: 'client avatar 2',
    review: 'Heres a random text as a review for my work: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, repudiandae eveniet excepturi!'
  },
  {
    id: 3,
    name: 'bout',
    image: AVTR3,
    title: 'client avatar 3',
    review: 'Heres a random text as a review for my work: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, repudiandae eveniet excepturi!'
  },
  {
    id: 4,
    name: 'mary',
    image: AVTR4,
    title: 'client avatar 4',
    review: 'Heres a random text as a review for my work: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, repudiandae eveniet excepturi!'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
        {clientsData.map(({ id, name, image, title, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={title} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials