import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  const data= [
    {
      id:1,
      title:'Food Website',
      image:IMG1,
      github:'https://www.github.com',
      demo:'https://www.github.com'
    },
    {
      id:2,
      title:'Food Website',
      image:IMG2,
      github:'https://www.github.com',
      demo:'https://www.github.com'
    },
    {
      id:3,
      title:'Food Website',
      image:IMG3,
      github:'https://www.github.com',
      demo:'https://www.github.com'
    },
    {
      id:4,
      title:'Food Website',
      image:IMG4,
      github:'https://www.github.com',
      demo:'https://www.github.com'
    },
    {
      id:5,
      title:'Food Website',
      image:IMG5,
      github:'https://www.github.com',
      demo:'https://www.github.com'
    },
    {
      id:6,
      title:'Food Website',
      image:IMG6,
      github:'https://www.github.com',
      demo:'https://www.github.com'
    },
  ]

  return (
   <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
     {
       data.map(({id, title, image, github , demo}) =>{
        return(
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn">Github</a>
              <a href={demo} className="btn btn-primary">Demo</a>
            </div>
          </article>
        );
       }
       )
      }
    </div>
   </section>
  )
}

export default Portfolio