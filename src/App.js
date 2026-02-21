import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BlueScreen from './BlueScreen'
import Hack from './Hack'
import Mushroom from './Mushroom'
import Trivia from './Trivia'
import Surprise from './Surprise';

function App() {
	
	const [stage, setStage] = useState(4);
			
  return (
    <div className="App">
      <header className="App-header">
		{
			stage === 0 ? 
        <BlueScreen setStage = { setStage }/> :
      stage === 1 ?
				<Trivia setStage = { setStage }/> :
			stage === 2 ?
				<Mushroom setStage = { setStage }/> :
			stage === 3 ? 
				<Hack setStage = { setStage }/> :
				<Surprise/>
		}
      </header>
    </div>
  );
}

export default App;