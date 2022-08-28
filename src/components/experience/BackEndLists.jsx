import React from 'react'
import { HiBadgeCheck } from 'react-icons/hi'

const BackEndLists = () => {
  return (
    <div className="experience__content">

      <article className='experience__details'>
        <HiBadgeCheck />
        <div>
          <h4>Node JS</h4>
          <small className='text-light'>Null</small></div>
      </article>
      <article className='experience__details'>
        <HiBadgeCheck />
        <div>
          <h4>PHP</h4>
          <small className='text-light'>Null</small></div>
      </article>
      <article className='experience__details'>
        <HiBadgeCheck />
        <div>
          <h4>Python</h4>
          <small className='text-light'>Null</small></div>
      </article>
      <article className='experience__details'>
        <HiBadgeCheck />
        <div>
          <h4>MongoDB</h4>
          <small className='text-light'>Null</small></div>
      </article>
      <article className='experience__details'>
        <HiBadgeCheck />
        <div>
          <h4>MySQL</h4>
          <small className='text-light'>Null</small></div>
      </article>

    </div>
  )
}

export default BackEndLists