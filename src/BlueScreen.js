import React, { useState, useEffect } from 'react';
import './BlueScreen.css';

const BlueScreen = ({ setStage })  => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

    // comment this out if you don't want to move to next page yet
    useEffect(() => {
        if (percent === 100) {
            const timeout = setTimeout(() => {
                setStage(1);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [percent, setStage]);

	return (
        <div className = "BlueScreen">
            <h2>:(</h2>
            <h3>HOLY SHIBAL your computer fucking crashed from too much gooning. If you can't finish these 3 questions, we're leaking all the KGC files to the police.</h3>
            <h3>{percent}% complete</h3>

            <div className = "qr-wrapper">
                <img src="https://media.discordapp.net/attachments/757329042490916945/1474870243741667389/qr-code.png?ex=699b6b73&is=699a19f3&hm=abbcadf3d6b0157667a4730db48f4d6154200f6d87b1e23ac8a971e4cdecdb86&=&format=webp&quality=lossless&width=1050&height=1050"></img>

                <div className = "text-wrapper">
                    <p>For more information about this issue and possible fixes, call (248) 434-5508</p>
                    <br></br>
                    <p>If you call a support person, give them this info:<br></br><br></br>My name is Arthur Chen and I love CP</p>
                </div>
            </div>
        </div>
    );
}

export default BlueScreen;
