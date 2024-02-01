import React from 'react'
import './Services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
 <section id="services">
  <h5>What I offer</h5>
   <h2>My Services</h2>

   <div className="container services__container">

    {/**WEB DESIGN */}
    <article className="service">
      <div className="service__head">
        <h3>Web Development</h3>
      </div>
      <ul className="service__list">
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
      </ul>
    </article>
    {/**END OF WEB DESIGN */}

{/**APP DESIGN */}
<article className="service">
      <div className="service__head">
        <h3>Mobile App Development</h3>
      </div>
      <ul className="service__list">
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
      </ul>
    </article>
    {/**END OF APP DESIGN */}

    {/**AFFILATE MARKETTING */}
    <article className="service">
      <div className="service__head">
        <h3>Affilate Marketting Services</h3>
      </div>
      <ul className="service__list">
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className="service__list-icon"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
      </ul>
    </article>
    {/**END OF AFFILATE MARKETTING */}



   </div>
 </section>
  )
}

export default Services;