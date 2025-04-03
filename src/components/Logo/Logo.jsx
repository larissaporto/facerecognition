import React from 'react'
import Tilt from 'react-parallax-tilt'
import brain from './brain.svg'
import './Logo.css'

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt br2 shadow-2' style={{ width: '150px', height: '150px' }}>
          <div className='pa3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
            <img src={brain} width={100} height={100} alt='logo' />
          </div>
      </Tilt>
    </div>
  )
}

export default Logo
