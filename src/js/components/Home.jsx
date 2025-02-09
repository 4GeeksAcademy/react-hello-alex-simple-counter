import React, {useState, useEffect} from "react";
import Contador from "./Contador";


//create your first component
const Home = () => {
	
	const [count, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => { setSeconds(count + 1); }, 1000);
        return () => clearInterval(intervalId);
    }, [count]);

    return (
        <div>
            <Contador Number={count} />
        </div>
    );
};

export default Home;