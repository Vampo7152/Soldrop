import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Airdrop Solana Tokens to Thousands of Wallets <br/> in few clicks!
              </h1>
              <button className="btn btn-outline-success" type="submit">
                Start Now!
              </button>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img src="Airdrop3.png" alt="heroimg" className="img-fluid" />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
