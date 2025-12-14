import React from 'react'
import LeftHome from './LeftHome'
import RightHome from './RightHome'

const HomeSection = () => {
  return (
    <div>
        <section className='home-section'>
        <div className='container'>
          <div className='row'>
            <LeftHome />
            <RightHome />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeSection