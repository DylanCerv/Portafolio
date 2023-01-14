import React from 'react'
import "./About.css"
import { FormattedMessage } from 'react-intl'
import useLazyLoading from '../../../Hooks/useLazyLoading'

export default function About() {
  const { isNearScreen, fromRef } = useLazyLoading({distance: '200px'});

  return (
    <section className='imgFigura px-[18px]' id='about' ref={fromRef} >
      {
        isNearScreen &&
        <>
          <h1 className='title font-bold uppercase my-10'>
            <FormattedMessage
              id="about-me.title"
            />
          </h1>
          <p>
              <FormattedMessage
                id="about-me.paragraph1"
              />
              <br />
              <br />
              <FormattedMessage
                id="about-me.paragraph2"
              />
              <br />
              <br />
              <FormattedMessage
                id="about-me.paragraph3"
                />
              <br />
              <br />
              <FormattedMessage
                id="about-me.paragraph4"
              />
              <br />
              <br />
              <FormattedMessage
                id="about-me.paragraph5"
                />
              <br />
              <br />
              <FormattedMessage
                id="about-me.paragraph6"
                />
                <br />
              <br />
              <FormattedMessage
                id="about-me.paragraph7"
                />
                <br />
              <br />
              <FormattedMessage
                id="about-me.paragraph8"
                />
          </p>
        </>
      }
    </section>
  )
}
