import React from "react";

const Works = () => {
  return (
    <>
      <section className="worksDiv">
        <div className="work-container container">
          <h1 className="main-heading text-center">When to Use?</h1>
          <div className="row">
            <div className="col-12 col-lg-4 text-container work-container-subdiv">
            <i className="fab fa-fly fontawesome-style" ></i>
              <h2 className="sub-heading fw-bolder text-center">
              AirDrops
              </h2>
              <p className="main-hero-para w-100">
              Are you trying to double your network size with an AirDrop? Export a CSV list of token holders and execute your AirDrop in minutes.
              </p>
            </div>
            <div className="col-12 col-lg-4 text-container work-container-subdiv">
            <i className="far fa-chart-network fontawesome-style"></i>
              <h2 className="sub-heading fw-bolder  text-center">Bounty Programs</h2>
              <p className="main-hero-para w-100">
              Have a list of token holders that have fulfilled your Bounty requirements? Get them paid up with just a few clicks.
              </p>
            </div>
            <div className="col-12 col-lg-4 text-container work-container-subdiv">
            <i className="fal fa-gifts fontawesome-style"></i>
              <h2 className="sub-heading fw-bolder text-center">
              Token Giveaways
              </h2>
              <p className="main-hero-para w-100">
              Start a social media campaign, retweet and gain tokens! When the time comes to distribute we'll make it easy!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
