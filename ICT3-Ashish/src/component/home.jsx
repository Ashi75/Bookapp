import React from "react";
import Products from "./products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://media.istockphoto.com/photos/school-picture-id1016131800?b=1&k=20&m=1016131800&s=170667a&w=0&h=imifkJTvS-4b8cvOhVNlCqqvZlwI4S-xCKZ6Oxbla4Q="
          className="card-img"
          alt="BackGround"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              All Books are Available
            </h5>
            <p className="card-text lead fs-2">
              Your favorite books are your doorstep
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Home;
