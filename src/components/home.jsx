import React from 'react'
import NavBar from './navbar';
import Homebanner from './homebanner';
import Homeabout from './homeabout';
import Homesec1 from './homesec1';
import Sliding from './slider';
import Homesec2 from './homesec2';

import Homesec3 from './homesec3';
import Test from './test';
import Footer from './footer';
import Journey from './journey';

function Home() {
  return (
    <div>
        <NavBar/>
        <Homebanner/>
        <Homeabout/>
        <Homesec1/>
        <Sliding/>
        <Homesec2/>
        <Journey/>
        <Homesec3/>
        <Test/>
        <Footer/>
        
    </div>
  )
}

export default Home