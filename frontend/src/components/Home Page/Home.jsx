import React from 'react'
import Header3 from './Header3'
import Carousel from './Carousel'
import slides from '../../data/carouselData.json'
import NewArrival from './NewArrival';

const Home = () => {
  return (
    <div>
        <Header3/>
        <Carousel data={slides}/>
        <NewArrival/>
    </div>
  )
}

export default Home