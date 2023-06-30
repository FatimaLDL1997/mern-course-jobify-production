import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import React from "react";

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Ever wanted to write but you don't feel like erasing and wasting
              trees? Or Maybe you are that person who forgets to get that book you
              always want to have on the go. Or maybe you just don't like the hassle of 
              carrying things outside with you. Maybe your afraid your sneaky
              someone at home is going to take a peak at your writings. Maybe
              you just don't like how paper feels.
            </p>

            <p></p>
            <p>
              Whatever your reason may be, this is then the perfect solution for you! Here you can write
              your notes digitally and securely from wherever you may be.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
