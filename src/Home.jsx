import React from 'react';
import Navigation from './Navigation.jsx';
import Header from './Header.jsx'
import Works from '.Works.jsx'
import WhenToUse from './WhenToUse.jsx';
import Faq from './Faq.jsx';
import Footer from './Footer.jsx'

function Home() {
  return (
   <>
   <Navigation />
   <Header />
   <Works />
   <WhenToUse />
   <Faq />
   <Footer />
   </>
  );
}

export default Home;
