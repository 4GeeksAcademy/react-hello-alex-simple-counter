import React from "react";
import "./index.css";

const Contador = (props) => {
	const contador =props.Number.toString().padStart(6,"0");

	return (
		<div className="bigCounter">
            <div className="Seconds">
				<div className="Number">
                       {contador}
				</div>
			</div>
		</div>
	);
};

export default Contador;