import { ProjectsData } from '../../assets/data/projects'
import { useRef, useState } from 'react';
// import { useAnimations } from './useAnimations'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './styles.scss'

import { CgWebsite } from 'react-icons/cg'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import Laptop from '../../assets/projects/laptop.png'
import { gsap } from 'gsap';

export function Projects({ theme, t }) {
  const swiper = useRef(null);
  const [projectShown, setProjectShown] = useState(0)

  function handleChange(e) {
    setProjectShown(e.realIndex)
    gsap.fromTo('section.info', {y: -100, opacity: 0}, {y: 0, opacity: 1, duration: .7})
  }
  
  function handlePrevious() {
    swiper.current.swiper.slidePrev()
  }

  function handleNext() {
    swiper.current.swiper.slideNext()
  }

  return (
    <article id='projects' className={theme}>
      <section className="post">
        <button className="prev-btn" onClick={handlePrevious}>
          <MdArrowBackIosNew />
        </button>
        <Swiper loop grabCursor ref={swiper} onSlideChange={handleChange}>
          {ProjectsData.map(project => (
            <SwiperSlide key={project.id}>
              <img src={project.image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="next-btn" onClick={handleNext}>
          <MdArrowForwardIos />
        </button>
        <img className="laptop-overlay" src={Laptop}>
          
        </img>
      </section>
      <section className="info">
        <section className="labels">
          {ProjectsData[projectShown].labels.map(label => <i key={label}>{label}</i>)}
        </section>
        <h2>
          {ProjectsData[projectShown].title}
        </h2>
        <p>
          {t(ProjectsData[projectShown].description)}
        </p>
        <section className="buttons">
          <button>Demo <CgWebsite /></button>
          <button>GitHub</button>
        </section>
      </section>
    </article>
  )
}