import React from "react";

const Faq = () => {
  return (
    <>
      <section className="contact-section"></section>
      <div className="container">
        <div classname="row">
         <div className="col-12 col-lg-10 mx-auto">
             <h1 className="text-center">Frequently Asked Questions</h1>
             <div className="row our-services-info">
                <div className="col-1 our-services-number">1</div>
                <div className="col-11 our-services-data">
                  <h2>Format CSV Files</h2>
                  <p className="main-hero-para">
                    Hery Format your CSV files according to the suggested from
                    documentation and now you are ready for next step.
                  </p>
                </div>
              </div>
            </div>
            <div className="row our-services-info">
            <div className="col-1 our-services-number">2</div>
            <div className="col-11 our-services-data">
              <h2>Connect Wallet</h2>
              <p className="main-hero-para">
                Hery Format your CSV files according to the suggested from
                documentation and now you are ready for next step.
              </p>
            </div>
            </div>
          </div>
          <div className="row our-services-info">
            <div className="col-1 our-services-number">3</div>
            <div className="col-11 our-services-data">
              <h2>Download results</h2>
              <p className="main-hero-para">
                Hery Format your CSV files according to the suggested from
                documentation and now you are ready for next step.
              </p>
          </div>
          </div>
      </div>
    </>
  );
};
export default Faq;
