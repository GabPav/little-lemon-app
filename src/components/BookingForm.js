import React, { useState } from "react";

const Booking = (props) => {
    const [date, setDate] = React.useState(new Date());
    const [times, setTime] = React.useState(new Date());
    const [guest, setGuests] = React.useState(new Date());
    const [occasion, setOccasion] = React.useState(new Date());
    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose date:</label>
                            <input id="book-date" value={date} type="date" onChange={(e) => handleChange(e.target.value)} required />
                        </div>

                        {/*Time*/}
                        <div>
                            <label htmlFor="book-time">Choose time:</label>
                            <select name="book-time" id="" value={times} onChange={(e) => setTime(e.target.value)}>
                                <option >Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {
                                        return (
                                            <option key={availableTimes}>{availableTimes}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        {/*Guests*/}
                        <div>
                            <label htmlFor="book-guests">Number of guests:</label>
                            <input id="book-guests" value={guest} type="number" onChange={(e) => setGuests(e.target.value)} min="1" />
                        </div>

                        {/*Occasion*/}
                        <div>
                        <label htmlFor="book-occasion">Occasion:</label>
                        <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        </div>

                        {/*Submit button*/}
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Make Your reservation"} onClick={handleSubmit} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default Booking;