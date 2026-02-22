import { useState } from 'react'
import './Mushroom.css'

const Mushroom = ({ setStage })  => {
	
	const [value, setValue] = useState("");

	const handleChange = e => {
		setValue(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
		if (value === 'p') {
			setStage(3);
		}
	}

    return (
        <div className="Mushroom">
			<h1> CS429H Homework #67 </h1>
				<p> 
	An oyster mushroom walks into a bar and asks for n shots.
	The bartender gives him m times as many shots.
				</p> 
			<br/>
			<p>
	Let n be the number of shots and m be the multiplier the bartender uses.
	For example, if n = 44 and m = 1.52272727, the bartender gives the oyster mushroom 67 shots.
			</p>
			<br/>
			<p>
	If n = 23 and m = 4.73913043, the bartender gives him the letter m
			</p>
			<br/>
			<p>
	If n is as many shots as letters in the oyster’s legal name, and m = 6.22222222, what does the bartender give him? 
			</p>

			<input 
				onChange={e => handleChange(e)}
				value={value}></input>
			<button 
				style={{height:"5vh", width:"10vw"}}
				onClick={e => handleSubmit(e)}>
				Submit </button>
        </div>
    );
}

export default Mushroom;
