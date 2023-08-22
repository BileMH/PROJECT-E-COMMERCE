import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">welcome to aware shopping website</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Welcome to our online store! Discover the latest trends in clothing and shop with ease. Happy shopping!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
