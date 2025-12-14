import React from 'react'
import Logo from './Logo.jsx'
import NavigationLinks from './NavigationLinks.jsx'

const NavigationSection = () => {
  return (
    <div>
        <section className='nav-bar'>
        <div className='container'>
          <div className='row'>
            <Logo/>
            <NavigationLinks/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NavigationSection