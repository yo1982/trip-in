import React from 'react';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import FeaturedCities from './FeaturedCities';
import { Page } from '../types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <FeaturedCities onNavigate={onNavigate} />
    </>
  );
};

export default HomePage;
