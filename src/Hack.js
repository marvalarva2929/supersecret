import jwt from "jsonwebtoken"
import { useEffect, useState } from "react";

const Hack = ({setStage})  => {
	
	const [value, setValue] = useState("");

	const token = "Yoo hoo!!! Arthur over here !!!! \n\n eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbnN3ZXIiOiJZbyB0aGlzIHRoZSBhbnN3ZXIgZ25nOiBzaWdtYXNpZ21hMTIzIiwiaWF0IjoxNzcxNzM3OTY4fQ.1-LdagHvWgVhHgFnL5C-zvdcniD1j898gt8fDhgshXc"
	  useEffect(() => {
    // Define async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9999/test",
			{
				  method: "POST",
  headers: {
    "Content-Type": "text/plain"
  },
  body: token

			});

        const result = await response.json();
      } catch (err) {
      } finally {
      }
    };

    fetchData();
  }, []); 

	const handleChange = e => {
		setValue(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
		if (value === "sigmasigma123") {
			setStage(4);
		}
	}
	return <> 
        <div className="Mushroom">
			<h1> The final test 😨 </h1>
				<p>
Matthew burped a message. Feifan Inspected the code, but Kaavya couldn’t decode what was going on because she was too busy working on prog (watching reels).
				</p>
				<p>
Can you figure out the meaning of Matthew’s burp? Figure it out soon, or else the kgc may be cooked 😱
				</p>
			<input 
				onChange={e => handleChange(e)}
				value={value}></input>
			<button 
				style={{height:"5vh", width:"10vw"}}
				onClick={e => handleSubmit(e)}>
				Submit </button>
        </div>

		</>
}

export default Hack;
