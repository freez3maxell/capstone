import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-form d-flex align-items-center justify-content-center ">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}
export default BookingPage;
