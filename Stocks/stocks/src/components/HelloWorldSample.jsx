import React, { createElement, useState } from "react";
import '../ui/Stocks.css';

const api = {
    key: "783aaba01dmsh4d6258e9276ffdap1f8f29jsnbed481b82bab",
    host: "real-time-finance-data.p.rapidapi.com"
};

export function HelloWorldSample({ sampleText }) {
    const [search, setSearch] = useState("");
    const [timeline, setTimeLine] = useState("");
    const [period, setPeriod] = useState({});

    const searchPressed = () => {
        fetch(`https://real-time-finance-data.p.rapidapi.com/stock-time-series-source-2?symbol=${search}&period=${timeline}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': api.key,
                'x-rapidapi-host': api.host
            }
        })
            .then(res => res.json())
            .then(result => {
                setPeriod(result);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <>
            <div className="widget-wrapper">
                <h2>{sampleText}</h2>
                <div>
                    <input
                        className="myInput"
                        type="text"
                        placeholder="Search here..."
                        onChange={e => setSearch(e.target.value)}
                    />
                    <input
                        className="myInput"
                        type="text"
                        placeholder="Duration"
                        onChange={e => setTimeLine(e.target.value)}
                    />
                    <button className="mysearchbtn" onClick={searchPressed}>
                        Search
                    </button>
                </div>
                {period.data && (
                    <div className="period-info">
                        <p className="myptag">Symbol: {period.data.symbol}</p>
                        <p className="myptag">Price: {period.data.price}</p>
                        <p className="myptag">Exchange: {period.data.exchange}</p>
                        <p className="myptag">Type: {period.data.type}</p>
                        <p className="myptag">Day Low: {period.data.day_low}</p>
                        <p className="myptag">Day High: {period.data.day_high}</p>
                        <p className="myptag">Year Low: {period.data.year_low}</p>
                        <p className="myptag">Year High: {period.data.year_high}</p>
                        <p className="myptag">Currency: {period.data.currency}</p>
                        <p className="myptag">Volume: {period.data.volume}</p>
                        <p className="myptag">Previous Close: {period.data.previous_close}</p>
                        <p className="myptag">Change: {period.data.change}</p>
                        <p className="myptag">Change Percent: {period.data.change_percent}</p>
                        <p className="myptag">Timezone: {period.data.exchange_timezone}</p>
                    </div>
                )}
            </div>
        </>
    );
}
