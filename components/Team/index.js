import React, {useCallback, useState} from 'react'
import {SectionBlock} from '../SectionBlock'

const MEMBERS = {
  CARLOS: 1,
  MIGUEL: 2,
  JOAN: 3,
  DAVID: 4
}

export function Team() {
  const [hovered, setHover] = useState(0)
  const handleHover = (hovered = 0) =>
    useCallback(() => setHover(hovered), [hovered])

  return (
    <React.Fragment>
      <SectionBlock id="team" title="Small team," boldTitle="big players">
        <div>
          <img
            className={hovered === MEMBERS.CARLOS ? 'hover' : ''}
            onMouseOver={handleHover(MEMBERS.CARLOS)}
            onMouseOut={handleHover()}
            src="/static/carlos.jpg"
          />
          <img
            className={hovered === MEMBERS.MIGUEL ? 'hover' : ''}
            onMouseOver={handleHover(MEMBERS.MIGUEL)}
            onMouseOut={handleHover()}
            src="/static/miguel.jpg"
          />
          <img
            className={hovered === MEMBERS.JOAN ? 'hover' : ''}
            onMouseOver={handleHover(MEMBERS.JOAN)}
            onMouseOut={handleHover()}
            src="/static/joan.jpg"
          />
          <img
            className={hovered === MEMBERS.DAVID ? 'hover' : ''}
            onMouseOver={handleHover(MEMBERS.DAVID)}
            onMouseOut={handleHover()}
            src="/static/david.jpg"
          />
        </div>
        <div className={hovered > 0 ? 'hover' : ''}>
          <p
            className={hovered === MEMBERS.CARLOS ? 'hover' : ''}
            onMouseOver={handleHover(MEMBERS.CARLOS)}
            onMouseOut={handleHover()}
          >
            <strong>Carlos Villuendas</strong> is a full-stack developer with
            12+ years experience in software development. He's been involved in
            several international web projects with millions of daily users. He
            likes all things JavaScript and has a passion for minimalistic,
            highly-scalable web architecture. Avid contributor to open-source
            projects and, in general, an enthusiast of a free Internet.
          </p>
          <p
            className={hovered === MEMBERS.MIGUEL ? 'hover' : ''}
            onMouseOver={handleHover(MEMBERS.MIGUEL)}
            onMouseOut={handleHover()}
          >
            <strong>Miguel Ángel Durán</strong> is a professional developer with
            an ample ReactJS background and over 15 years of experience as a web
            consultant. He has lately specialized in improving web app
            performance. He is a reference in the frontend Community thanks to
            his YouTube channel and Udemy courses.
          </p>
          <p
            className={hovered === MEMBERS.JOAN ? 'hover' : ''}
            onMouseOver={handleHover(MEMBERS.JOAN)}
            onMouseOut={handleHover()}
          >
            <strong>Joan León</strong> is a Frontend developer with more than 15
            years experience in UI development, animation, and web interaction.
            He is passionate about teaching and sharing knowledge, always
            spreading his passion for CSS in the Frontend community.
          </p>
          <p
            className={hovered === MEMBERS.DAVID ? 'hover' : ''}
            onMouseOver={handleHover(MEMBERS.DAVID)}
            onMouseOut={handleHover()}
          >
            <strong>David García</strong> is passionate about technology and
            computers since early age. Involved in a wide variety of projects
            since 1999. Currently working as a frontend developer using
            technologies like ReactJS, ES6 and enjoying in everything I do.
          </p>
        </div>
      </SectionBlock>
      <style jsx>{`
        section {
          display: flex;
          justify-content: space-between;
        }
        section div:first-child {
          flex: 0 0 400px;
        }
        section div:first-child img:last-child {
          margin-left: -63px;
        }
        section div:last-child {
          align-self: center;
          flex: 0 0 500px;
          justify-content: center;
        }
        img {
          clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
          cursor: crosshair;
          filter: grayscale();
          height: 300px;
          width: 25%;
          object-fit: cover;
          transition: filter 300ms ease;
        }
        img:hover,
        img.hover {
          filter: none;
        }
        section div h2 {
          text-align: center;
        }
        p {
          cursor: crosshair;
          margin: 0 0 8px 0;
          transition: opacity 0.3s ease;
        }
        section div:last-child:hover p,
        div.hover p {
          opacity: 0.2;
        }
        section div:last-child:hover p:hover,
        div.hover p.hover {
          opacity: 1;
        }
      `}</style>
    </React.Fragment>
  )
}
