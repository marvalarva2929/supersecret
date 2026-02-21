import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Hack } from './Hack.js'
import { Mushroom } from './Mushroom.js'
import { Trivia } from './Trivia.js'
import Surprise from './Surprise';

function App() {
	
	const [stage, setStage] = useState(0);
			
  return (
    <div className="App">
      <header className="App-header">
		{
			stage === 0 ? 
				<Trivia/> :
			stage === 1 ?
				<Mushroom/> :
			stage === 2 ? 
				<Hack/> :
				<Surprise/>
		}
      </header>
    </div>
  );
}

export default App;
