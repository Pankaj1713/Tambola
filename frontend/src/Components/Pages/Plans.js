import React from "react";

const Plans = () => {
  return (
    <>
      <div className="row m-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Platinum (Premium)</h5>
              <p className="card-text">
                Platinum (Premium) - Rs.25,000/ticket Full House -
                Rs.1,00,000/game Top, Middle and Bottom Lines - Rs,5,000/each
              </p>
              <a href="#" className="btn btn-primary">
                Subscribe
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Platinum (Plus)</h5>
              <p className="card-text">
                Platinum (Plus) - Rs.10,000/ticket Full House - Rs.50,000/game
                Top, Middle and Bottom Lines - Rs.5,000/-
              </p>
              <a href="#" className="btn btn-danger">
                Subscribe
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Platinum</h5>
              <p className="card-text">
                Platinum - Rs.5,000/ticket Full House - Rs.25,000/game Top,
                Middle and Bottom Lines - Rs.1,000/each
              </p>
              <a href="#" className="btn btn-success">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
