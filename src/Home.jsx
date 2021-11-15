import React from "react";
import Faq from "./Faq.jsx";
import Header from "./Header.jsx";
import WhenToUse from "./WhenToUse.jsx";
import Works from "./Works.jsx";

function Home() {
  return (
    <>
      <Header />
      <Works />
      <WhenToUse />
      <Faq />
    </>
  );
}

export default Home;
