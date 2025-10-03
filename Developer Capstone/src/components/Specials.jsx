// Specials.jsx
import React from "react";

export default function Specials() {
  return (
      <section className="container specials-container py-4 mb-lg-5 px-0">
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <div className="card h-100 shadow rounded-4 border-2">
              <img src="/assets/greek salad.jpg" className="specials-card-image card-img-top rounded-top-4" alt="Greek Salad" />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="fw-bold mb-0">Greek Salad</h3>
                    <span className="fw-bold text-success fs-5">$12.99</span>
                  </div>
                  <p className="card-text text-secondary" style={{letterSpacing: "1px"}}>
                    The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold fs-5">Order Delivery</span>
                  <span className="fs-4"><i className="bi bi-car-front"></i></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card h-100 shadow rounded-4 border-2">
              <img src="/assets/bruchetta.svg" className="specials-card-image card-img-top rounded-top-4" alt="Bruchetta" />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="fw-bold mb-0">Bruchetta</h3>
                    <span className="fw-bold text-success fs-5">$5.99</span>
                  </div>
                  <p className="card-text text-secondary" style={{letterSpacing: "1px"}}>
                    Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold fs-5">Order Delivery</span>
                  <span className="fs-4"><i className="bi bi-car-front"></i></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card h-100 shadow rounded-4 border-2">
              <img src="/assets/lemon dessert.jpg" className="specials-card-image card-img-top rounded-top-4" alt="Lemon Dessert" />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="fw-bold mb-0">Lemon Dessert</h3>
                    <span className="fw-bold text-success fs-5">$5.00</span>
                  </div>
                  <p className="card-text text-secondary" style={{letterSpacing: "1px"}}>
                    This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold fs-5">Order Delivery</span>
                  <span className="fs-4"><i className="bi bi-car-front"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
