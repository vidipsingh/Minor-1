import React from 'react'
import Header3 from './Header3'
import Carousel from './Carousel'
import slides from '../../data/carouselData.json'
import NewArrival from './NewArrival';
import SavingSection from './SavingSection';
import CategorySection from './CategorySection';
import FeedbackSection from './FeedbackSection';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
        <Header3/>
        <Carousel data={slides}/>
        <NewArrival/>
        <SavingSection/>
        <CategorySection/>
        <FeedbackSection/>
        <Footer />
    </div>
  )
}

export default Home