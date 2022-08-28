import React from 'react'
import { HiBadgeCheck } from 'react-icons/hi'

const FrontEndLists = () => {
  return (
    <div className="experience__content">
      <article className='experience__details'>
        <HiBadgeCheck />
        <div>
          <h4>HTML</h4>
          <small className='text-light'>Intermediate</small>
        </div>
      </article>
      <article className='experience__details'>
        <HiBadgeCheck />
        <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Basic</small>
        </div>
      </article>
      <article className='experience__details'>
        <HiBadgeCheck />
        <div>
          <h4>Tailwind</h4>
          <small className='text-light'>Null</small>
        </div>
      </article>
      <article className='experience__details'>
        <HiBadgeCheck />
        <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermediate</small>
        </div>
      </article>
      <article className='experience__details'>
        <HiBadgeCheck />
        <div>
          <h4>React</h4>
          <small className='text-light'>Basic</small>
        </div>
      </article>
      <article className='experience__details'>
        <HiBadgeCheck />
        <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Null</small>
        </div>
      </article>
    </div>
  )
}

export default FrontEndLists