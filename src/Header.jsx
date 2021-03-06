import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Airdrop Solana Tokens to Thousands of Wallets <br/> in few clicks!
              </h1>
              <button className="btn btn-outline-success" type="submit" onClick={() => history.push("/app")}>
                Start Now!
              </button>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img src="Airdrop-final.png" alt="Airdrop" className="img-fluid" />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
