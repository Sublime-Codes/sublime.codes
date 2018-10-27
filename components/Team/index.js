import React, {useCallback, useState} from 'react'
import {SectionBlock, SectionBlockColumn} from '../SectionBlock'

const MEMBERS = {
  CARLOS: 1,
  MIGUEL: 2
}

export function Team() {
  const [hovered, setHover] = useState(0)
  const handleHover = (hovered = 0) =>
    useCallback(() => setHover(hovered), [hovered])

  return (
    <React.Fragment>
      <SectionBlock
        title={
          <span id="team">
            Small team, <strong>big players</strong>
          </span>
        }
      >
        <section>
          <SectionBlockColumn>
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
            </div>
          </SectionBlockColumn>
          <SectionBlockColumn>
            <div className={hovered > 0 ? 'hover' : ''}>
              <p
                className={hovered === MEMBERS.CARLOS ? 'hover' : ''}
                onMouseOver={handleHover(MEMBERS.CARLOS)}
                onMouseOut={handleHover()}
              >
                <strong>Carlos Villuendas</strong> is a full-stack developer
                with 12+ years experience in software development. He's been
                involved in several international web projects with millions of
                daily users. He likes all things JavaScript and has a passion
                for minimalistic, highly-scalable web architecture. Avid
                contributor to open-source projects and, in general, an
                enthusiast of a free Internet.
              </p>
              <p
                className={hovered === MEMBERS.MIGUEL ? 'hover' : ''}
                onMouseOver={handleHover(MEMBERS.MIGUEL)}
                onMouseOut={handleHover()}
              >
                <strong>Miguel Ángel Durán</strong> is a professional developer
                with an ample ReactJS background and over 15 years of experience
                as a web consultant. He has lately specialized in improving web
                app performance. He is a reference in the frontend Community
                thanks to his YouTube channel and Udemy courses.
              </p>
            </div>
          </SectionBlockColumn>
        </section>
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
          clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
          cursor: crosshair;
          filter: grayscale();
          height: 300px;
          width: 50%;
          object-fit: cover;
          transition: filter 300ms ease;
        }
        img:hover,
        img.hover {
          filter: none;
        }
        p {
          cursor: crosshair;
          font-size: 14px;
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
        div p:first-child:after {
          border: 0;
          color: #aaa;
          content: '~';
          display: block;
          font-size: 16px;
          font-weight: 200;
          margin-top: 8px;
          text-align: center;
        }
      `}</style>
    </React.Fragment>
  )
}
