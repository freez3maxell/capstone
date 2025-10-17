import React, { useState, useEffect } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const todayStr = new Date().toISOString().split("T")[0];
    const [date, setDate] = useState(todayStr);
    const [time, setTime] = useState(availableTimes[0] || "");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("other");

    // Validation state
    const [isDateValid, setIsDateValid] = useState(true);
    const [isTimeValid, setIsTimeValid] = useState(true);
    const [isGuestsValid, setIsGuestsValid] = useState(true);
    const [isOccasionValid, setIsOccasionValid] = useState(true);
    const [formValid, setFormValid] = useState(true);

    useEffect(() => {
        // Date must not be empty and not in the past
        setIsDateValid(date && date >= todayStr);
        // Time must be in availableTimes
        setIsTimeValid(time && availableTimes.includes(time));
        // Guests must be between 1 and 10
        setIsGuestsValid(guests >= 1 && guests <= 10);
        // Occasion must not be empty
        setIsOccasionValid(!!occasion);
        setFormValid(isDateValid && isTimeValid && isGuestsValid && isOccasionValid);
    }, [date, time, guests, occasion, availableTimes, isDateValid, isTimeValid, isGuestsValid, isOccasionValid, todayStr]);

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleGuestsChange = (e) => {
        setGuests(Number(e.target.value));
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValid && submitForm) {
            submitForm({ date, time, guests, occasion });
        }
    };

    return (

            <div className="card shadow-lg rounded-4 my-5 p-4 w-100">
                <div className="mb-4">
                    <h2 className="fw-bold mb-1">
                        Book a table at<br />Little Lemon Chicago
                    </h2>
                    <div className="text-secondary fw-semibold">Find a table</div>
                </div>
                <form className="row g-2 align-items-center mb-4 rounded-4" onSubmit={handleSubmit}>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="date" className="form-label">Date</label>
                        <div className="input-group">
                            <input
                                type="date"
                                className="form-control"
                                id="date"
                                name="date"
                                value={date}
                                onChange={handleDateChange}
                                required
                                min={todayStr}
                                aria-label="On Click"
                            />
                            <span className="input-group-text" onClick={() => window.resDateInput && window.resDateDateInput.showPicker()}>
                                <i className="bi bi-calendar"></i>
                            </span>
                        </div>
                        {!isDateValid && <div className="text-danger small">Please select a valid date.</div>}
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="time" className="form-label">Time</label>
                        <select
                            className="form-select"
                            id="time"
                            name="time"
                            value={time}
                            onChange={handleTimeChange}
                            required
                            aria-label="On Click"
                        >
                            <option value="" disabled>Select time</option>
                            {availableTimes.map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                        {!isTimeValid && <div className="text-danger small">Please select a valid time.</div>}
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="guests" className="form-label">Guests</label>
                        <input
                            type="number"
                            className="form-control"
                            id="guests"
                            name="guests"
                            min="1"
                            max="10"
                            value={guests}
                            onChange={handleGuestsChange}
                            required
                            placeholder="1 person"
                            aria-label="On Click"
                        />
                        {!isGuestsValid && <div className="text-danger small">Guests must be between 1 and 10.</div>}
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="occasion" className="form-label">Occasion</label>
                        <select
                            className="form-select"
                            id="occasion"
                            name="occasion"
                            value={occasion}
                            onChange={handleOccasionChange}
                            required
                            aria-label="On Click"
                        >
                            <option value="" disabled>Select occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="other">No occasion</option>
                        </select>
                        {!isOccasionValid && <div className="text-danger small">Please select an occasion.</div>}
                    </div>
                    <div className="col-md-12 d-grid">
                        <button
                            type="submit"
                            className="btn btn-warning fw-bold mx-auto mt-4"
                            disabled={!formValid}
                        >
                            Find a Table
                        </button>
                    </div>
                </form>
            </div>
    );
};

export default BookingForm;