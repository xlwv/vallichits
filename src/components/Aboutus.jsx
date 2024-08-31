import React from 'react'
import NavBar from './navbar'
import Banner from './banner';
import Text from './text';
import Offer from './offer';
import Team from './team';
import Team2 from './team2';
import Footer from './footer';

import bannerimg from '../images/abtusbanner.png';

function Aboutus() {
  return (
    <div>
    <NavBar/>
      <Banner title="About Us" subtitle="Home >> About Us" bannerimg={bannerimg} />
      <Text/>
      <Offer/>
      {/* <Team/> */}
      <Team2/>
    
      <Footer/>
    </div>
      
  )
}

export default Aboutus