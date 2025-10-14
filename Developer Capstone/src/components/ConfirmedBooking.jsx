import React from 'react';

export default function ConfirmedBooking() {
  return (
      <main className="booking-form d-flex align-items-center justify-content-center " aria-label="Booking Confirmation">
          <div
              className="card shadow-lg rounded-4 my-5 p-4 w-100"
          >
            <h2
                className="fw-bold mb-1"
            >
                Booking Confirmed!
            </h2>
            <p>Your reservation has been successfully submitted. We look forward to seeing you!</p>
        </div>
    </main>
  );
}
