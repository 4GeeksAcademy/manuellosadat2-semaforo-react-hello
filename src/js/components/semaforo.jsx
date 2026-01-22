import React, { useState } from "react";

function TrafficLight() {
    const [color, setColor] = useState(" ");

    return (
        <div className="container">
            <div className="barra"></div>
            <div className="semaforo">
               <div className={`red light ${color === "red" ? "active" : ""}`} onClick={() => setColor("red")}></div>
                <div className={`yellow light ${color === "yellow" ? "active" : ""}`} onClick={() => setColor("yellow")}></div>
                <div className={`green light ${color === "green" ? "active" : ""}`} onClick={() => setColor("green")}></div>
            </div>
        </div>
    );
}

export default TrafficLight;
