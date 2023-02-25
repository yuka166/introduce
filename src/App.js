import { React, useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import ScrollReveal from 'scrollreveal'
import Skill from './components/ui/skill/skill';
import SkillArr from './data/skilldata'
import Timeline from './components/ui/timeline/timeline';
import TimelineArr from './data/timelinedata'
import './App.css';

function TimelineBorder() {
  return (
    <div className="timeline-border"></div>
  )
}

function TimelineArrowNext(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon icon={faAngleRight}
      className={className}
      style={{ ...style, color: 'white', width: '26px', height: '26px' }}
      onClick={onClick}
    />
  );
}

function TimelineArrowPrev(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon icon={faAngleLeft}
      className={className}
      style={{ ...style, color: 'white', width: '26px', height: '26px' }}
      onClick={onClick}
    />
  );
}

const slideUp = {
  distance: '10%',
  duration: 1500,
  origin: 'bottom',
  interval: 250,
  easing: 'ease'
};

function App() {

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <TimelineArrowNext />,
    prevArrow: <TimelineArrowPrev />,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  function ScrollDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  const txt = "Hello, I'm Dat!";
  const [text, textChange] = useState("");
  const [count, countChange] = useState(0);

  document.documentElement.style.setProperty("--typing-animation", "typingcursor 1s linear " + (txt.length * 100) + "ms infinite");

  useEffect(() => {
    if (count < txt.length) {
      setTimeout(() => {
        textChange(text + txt.charAt(count));
        countChange(count + 1);
      }, 100)
    }
  }, [count, text]);

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    ScrollReveal().reveal('.skill-list>div', slideUp);
    ScrollReveal().reveal('.primary-desc>div', { ...slideUp, delay: txt.length * 100 });
  }, []);

  return (
    <div className="container">
      <div className="first-word">
        <h1 className="title">{text}</h1>
        <div className="primary-desc">
          <div>A Front-End Developer whos loves to create beautiful, creative website.</div>
          <div>Aiming to be a Full-Stack Developer in the future.</div>
        </div>
        <div className="godown-btn"><button type='button' onClick={ScrollDown}><FontAwesomeIcon icon={faAngleDoubleDown} /></button></div>
      </div>
      <div className="programming-language">
        <div className="title">My skill</div>
        <div className='title-border'></div>
        <div className="skill-list">
          {SkillArr.map((skill) => {
            return (
              <Skill key={skill.id} type={skill.class} name={skill.name} desc={skill.desc} />
            )
          })}
        </div>
      </div>
      <div className="timeline">
        <div className="title">Timeline</div>
        <div className='title-border'></div>
        <Slider {...settings} className="timeline-list">
          {TimelineArr.map((timeline) => {
            if (timeline.id !== TimelineArr.length) {
              return (
                <Timeline key={timeline.id} year={timeline.year} desc={timeline.desc}><TimelineBorder /></Timeline>
              )
            }
            else {
              return (
                <Timeline key={timeline.id} year={timeline.year} desc={timeline.desc}></Timeline>
              )
            }
          })}
        </Slider>
      </div>
      <div className="contact">
        <div className='title'>Contact me</div>
        <div className='title-border'></div>
        <div className='social'>
          <div className='social-text'>Email: hoangdat1606@gmail.com</div>
          <div className='social-icon'>
            <div>
              <a href='https://www.facebook.com/izumi326/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
            <div>
              <a href='https://github.com/yuka166/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
