import React from 'react'

import main from '../assets/images/main.svg'

import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import { Link } from 'react-router-dom'




const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
       <Logo/> 
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span>App
          </h1>
          <p>
            Street art occupy pug migas slow-carb, la croix enamel pin woke
            synth everyday carry truffaut PBR&B 90's. Bodega boys gluten-free
            you probably haven't heard of them tofu cronut pork belly. Migas
            jawn tacos truffaut 8-bit
          </p>
          <Link to='/register' className="btn btn-hero">login/signup</Link>
        </div>
        <img src={main} alt="job-hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}



export default LandingPage
