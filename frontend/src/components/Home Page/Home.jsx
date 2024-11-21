import React, { useState } from 'react';
import Header3 from './Header3';
import Carousel from './Carousel';
import slides from '../../data/carouselData.json';
import NewArrival from './NewArrival';
import SavingSection from './SavingSection';
import CategorySection from './CategorySection';
import FeedbackSection from './FeedbackSection';
import Footer from '../Footer';

const Home = () => {
  const [colorBlindness, setColorBlindness] = useState(null);

  return (
    <div className={`app ${colorBlindness}`}>
      <header className="fixed bg-white top-0 left-0 right-0 z-50">
        <Header3 setColorBlindness={setColorBlindness} />
      </header>
      
      <div className="pt-12">
        <Carousel data={slides} />
        <NewArrival />
        <SavingSection />
        <CategorySection />
        <FeedbackSection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;