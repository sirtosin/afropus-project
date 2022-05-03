import React from 'react'
import Menu from '../components/Menu'
import Partners from '../components/Partners'
import { Slider } from '../components/Slider'
import { PortraitSlider } from '../components/PortraitSlider'
const Home = () => {
  
  return (
    <div>
      <Slider />
      <Menu />
      <PortraitSlider/>
      <Partners />
    </div>
  )
}

export default Home
