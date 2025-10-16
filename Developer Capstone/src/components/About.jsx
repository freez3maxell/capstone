import React from "react";
import BookingForm from "./BookingForm.jsx";

export default function About() {
  return (
      <main aria-label="About Content" className="main-page d-flex align-items-center justify-content-center">
        <div className="card shadow-lg rounded-4 my-5 p-4 w-100">
          <div className="mb-4">
            <h2 className="fw-bold mb-1">
              About us
            </h2>
          </div>

          <div className="row g-2 align-items-center mb-4">
            <p>
              Welcome to Little Lemon, your cozy neighborhood bistro where we serve up a delightful fusion of Mediterranean and American flavors. Nestled in the heart of Chicago, our restaurant is a haven for food enthusiasts seeking a unique dining experience.
            </p>
            <p>
              At Little Lemon, we pride ourselves on using the freshest ingredients to create dishes that are both flavorful and visually appealing. Our menu features a variety of options, from classic Mediterranean dishes like Greek salads and hummus platters to American favorites with a twist, such as gourmet burgers and artisanal pizzas.
            </p>
            <p>
              Our warm and inviting atmosphere is perfect for any occasion, whether you're looking for a casual lunch with friends, a romantic dinner for two, or a festive celebration with family. Our friendly staff is dedicated to providing exceptional service to ensure that every visit to Little Lemon is memorable.
            </p>
            <p>
              We also offer a curated selection of wines and craft cocktails that perfectly
            </p>

            <img className="rounded-5 mx-auto w-50 my-4" src="/assets/Mario and Adrian A.jpg" alt="Mario and Adrian" />
          </div>
        </div>
      </main>
  );
}
