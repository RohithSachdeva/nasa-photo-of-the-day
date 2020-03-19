import React, { useState, useEffect } from "react";
import axios from "axios";
import NASAData from "./NASAData";

export default function NasaCard() {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=XdxdNOQsBkUi5YJkbjNIlVtnPD75yGFAePvauVhr')
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(error => {
                console.log("Error", error);
            });
    }, []);
    
    return (
        <div className="nasa-card">
            <img src={data.url} className="space-img" />
            <NASAData
                title={data.title}
                date={data.date}
                explanation={data.explanation}
                copyright={data.copyright}
            />
        </div>
    )
}