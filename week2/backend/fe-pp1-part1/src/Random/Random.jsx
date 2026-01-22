import { useState } from "react";
import './random.css';

function Random({min, max}) {
    const [randomNumber] = useState(() => Math.floor(Math.random() * (max -min + 1)) +min);
    return (
        <div className="random-box">
            Random value between {min} and {max} =&gt; {randomNumber}
        </div>
    )

}
export default Random;
