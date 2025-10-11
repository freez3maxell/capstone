import React, {useState} from "react";

const BookingForm = ({availableTimes, dispatch}) => {
    const [date, setDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    });
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("No occasion");

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({type: 'UPDATE_TIMES', date: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div
            className="card shadow-lg rounded-4 p-4 w-100"
        >
            <div className="mb-4">
                <h2
                    className="fw-bold text-warning mb-1"
                >
                    Book a table at
                    <br/>
                    Little Lemon Chicago
                </h2>
                <div className="text-secondary fw-semibold">Find a table</div>
            </div>
            <form
                className="row g-2 align-items-center mb-4"
                onSubmit={handleSubmit}
            >
                <div className="col-md-3">
                    <div className="input-group">
                        <input
                            type="date"
                            className="form-control"
                            id="res-date"
                            value={date}
                            onChange={handleDateChange}
                            required
                            ref={input => { window.resDateInput = input; }}
                        />
                        <span
                            className="input-group-text"
                            onClick={() => window.resDateInput && window.resDateInput.showPicker()}
                        >
                            <i className="bi bi-calendar"></i>
                        </span>
                    </div>
                </div>

                <div className="col-md-3">
                    <select
                        className="form-select"
                        id="res-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Select time
                        </option>
                        {availableTimes.map((t) => (
                            <option key={t} value={t}>
                                {t}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-3">
                    <input
                        type="number"
                        className="form-control"
                        min="1"
                        max="10"
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        required
                        placeholder="1 person"
                    />
                </div>
                <div className="col-md-3">
                    <select
                        className="form-select"
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        required
                    >
                        <option value="other">No occasion</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>
                <div className="col-md-12 d-grid">
                    <button
                        type="submit"
                        className="btn btn-warning fw-bold mx-auto mt-4"
                    >
                        Find a Table
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;