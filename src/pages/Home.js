import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';

const home = () => {
  return (
    <>
      <Hero>
        <Banner title="just buy a house" subtitle="starting price R850 000">
          <Link to="/rooms" className="btn-primary">
            Houses
          </Link>
        </Banner>
      </Hero>

      <RoomsContainer />
    </>
  );
};

export default home;
