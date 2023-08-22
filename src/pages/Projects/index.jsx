import { ProjectsData } from '../../assets/data/projects'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './styles.scss'

import { AiOutlineDesktop, AiOutlineGithub } from 'react-icons/ai'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import Laptop from '../../assets/projects/laptop.png'
import { gsap } from 'gsap';

export function Projects({ theme, t }) {
  const swiper = useRef(null);
  const [projectShown, setProjectShown] = useState(0)

  function handleChange(e) {
    if (projectShown == e.realIndex) return
    setProjectShown(e.realIndex)
    gsap.fromTo('section.info', {opacity: 0}, {opacity: 1, duration: 1})
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
        <section className="links">
          <a
            href={ProjectsData[projectShown].deploylink}
            target='_blank'
            rel='noreferrer'>
            <AiOutlineDesktop />{t('deploy')}
          </a>
          <a
            href={ProjectsData[projectShown].githublink}
            target='_blank'
            rel='noreferrer'>
            <AiOutlineGithub />{t('repository')}
          </a>
        </section>
      </section>
    </article>
  )
}