import React from 'react';

export default function ConfirmedBooking() {
  return (


    <main aria-label="Booking Confirmation" className="main-page d-flex align-items-center justify-content-center">
        <div className="card shadow-lg rounded-4 my-5 p-4 w-100">
            <div className="mb-4">
                <h2 className="fw-bold mb-1">
                    Booking Confirmed!
                </h2>
            </div>

            <div className="row g-2 align-items-center mb-4">
                <p>
                    Your reservation has been successfully submitted. We look forward to seeing you!
                </p>

                <img className="rounded-5 mx-auto w-50 my-4" src="/assets/booking-suc.png" alt="Mario and Adrian" />

            </div>
        </div>
    </main>
  );
}
