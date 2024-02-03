import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination , Navigation} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import swiper slides

const data=[
  {
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi pariatur ad aliquam necessitatibus deserunt impedit cumque temporibus, sequi provident iusto tempora possimus dolore eligendi aspernatur eos officiis quibusdam eveniet',
    image:AVTR1,
  },
  {
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi pariatur ad aliquam necessitatibus deserunt impedit cumque temporibus, sequi provident iusto tempora possimus dolore eligendi aspernatur eos officiis quibusdam eveniet',
    image:AVTR2,
  },
  {
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi pariatur ad aliquam necessitatibus deserunt impedit cumque temporibus, sequi provident iusto tempora possimus dolore eligendi aspernatur eos officiis quibusdam eveniet',
    image:AVTR3,
  },
  {
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi pariatur ad aliquam necessitatibus deserunt impedit cumque temporibus, sequi provident iusto tempora possimus dolore eligendi aspernatur eos officiis quibusdam eveniet',
    image:AVTR4,
  },
]
const Testimonials = () => {
  return (
   <section id='#testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    <Swiper className=" container testimonials__container"

     // install Swiper modules
     modules={[ Pagination, Navigation ]}
     spaceBetween={40}
     slidesPerView={1}
     pagination={{ clickable: true }}

    >
       {
          data.map(({ name,review,image },index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt="avatar" />
              </div>
              <h5>{name}</h5>
                <small className="client__review">
                 {review}
              </small>
              </SwiperSlide>
            )
          })
        }
    </Swiper>

   </section>
  )
}

export default Testimonials


