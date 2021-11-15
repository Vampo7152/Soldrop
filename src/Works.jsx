import React from "react";

const Works = () => {
  return (
    <>
      <section className="worksDiv">
        <div className="work-container container">
          <h1 className="main-heading text-center">How It Works?</h1>
          <div className="row">
            <div className="col-12 col-lg-4 text-container work-container-subdiv">
              <i className="fal fa-file-csv fontawesome-style "></i>
              <h2 className="sub-heading fw-bolder text-center">
                Format CSV Files
              </h2>
              <p className="main-hero-para w-100">
                Format your CSV files according to the suggested from
                documentation and now you are ready for next step.
              </p>
            </div>
            <div className="col-12 col-lg-4 text-container work-container-subdiv">
              <i className="far fa-link fontawesome-style"></i>
              <h2 className="sub-heading fw-bolder  text-center">Connect Wallet</h2>
              <p className="main-hero-para w-100">
                Format your CSV files according to the suggested form here in
                and now you are ready for next step.
              </p>
            </div>
            <div className="col-12 col-lg-4 text-container work-container-subdiv">
              <i className="far fa-download fontawesome-style "></i>
              <h2 className="sub-heading fw-bolder text-center">
                Download results
              </h2>
              <p className="main-hero-para w-100">
                Format your CSV files according to the suggested form here in
                and now you are ready for next step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
