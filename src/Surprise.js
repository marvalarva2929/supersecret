import { Fireworks } from 'fireworks-js';
import React, { useState, useEffect, useRef } from 'react';
import './Surprise.css'

const Surprise = ()  => {
    const imgs = ["https://media.discordapp.net/attachments/757329042490916945/1474885161601597570/IMG_20260221_154648.jpg?ex=699b7958&is=699a27d8&hm=503139ac1d462dae14e2cc0039e5d8a149b3c3ff52c662b2eaddf1401c05ec3b&=&format=webp&width=788&height=1050", "https://media.discordapp.net/attachments/757329042490916945/1474888199166758993/IMG_20260221_155845.jpg?ex=699b7c2c&is=699a2aac&hm=696ee9ad44bafe6456a4c378639950504031ef8f28fbf153877a41ac30e7678e&=&format=webp&width=690&height=920", "https://media.discordapp.net/attachments/757329042490916945/1474888199804551433/IMG_20260221_155841.jpg?ex=699b7c2c&is=699a2aac&hm=daf953d3b356fb5aaa62540da9aec16f4d0af1426bd133166af4807eb91c6d51&=&format=webp&width=1226&height=920", "https://media.discordapp.net/attachments/757329042490916945/1474888200588890217/IMG_20260221_155837.jpg?ex=699b7c2d&is=699a2aad&hm=9581646871e1a48b77f0db19f92cd47f14c06e8375edfd1c04020b1121e08c59&=&format=webp&width=690&height=920", "https://media.discordapp.net/attachments/757329042490916945/1474888201062842420/IMG_20260221_155832.jpg?ex=699b7c2d&is=699a2aad&hm=887f3c307cf701a3d39bb7f26b9f109407c4ec6363bdb38a2e391a9041d65ebd&=&format=webp&width=690&height=920", "https://media.discordapp.net/attachments/757329042490916945/1474893596325969960/IMG_20260221_161902.jpg?ex=699b8133&is=699a2fb3&hm=21dd26f763283398845aab6224bd1d720fdbd3a320dfa4e2440c5451c92f1085&=&format=webp&width=518&height=920", "https://media.discordapp.net/attachments/757329042490916945/1474893597055651935/IMG_20260221_161859.jpg?ex=699b8133&is=699a2fb3&hm=2866c8f3e7955b6835b5c104ff6a4b41f4f24e831e4764e4ea965f0566f96d04&=&format=webp&width=1380&height=920", "https://media.discordapp.net/attachments/757329042490916945/1474893597794111558/IMG_20260213_165523.jpg?ex=699b8133&is=699a2fb3&hm=0dead93ae0f4aa5f722656a05f0412ab7b1bf64e43c880e4de07a435144ed8ac&=&format=webp&width=690&height=920", "https://media.discordapp.net/attachments/757329042490916945/1474899701877837956/IMG_20260221_164438.jpg?ex=699b86e3&is=699a3563&hm=129a5ce92511c0a4aec265f77fbaa655fb20985d10f232d81e94992e92392499&=&format=webp&width=1226&height=920", "https://media.discordapp.net/attachments/757329042490916945/1474899702439870575/IMG_20260221_164424.jpg?ex=699b86e3&is=699a3563&hm=ab7040aaa03c883448b0c0b3ed3d2aa7a9ce25ad077d154a026c2d34d9666bbd&=&format=webp&width=1226&height=920", "https://media.discordapp.net/attachments/757329042490916945/1474899702913831053/IMG_20260221_164415.jpg?ex=699b86e3&is=699a3563&hm=c18e448a21785d50e744b4e33f5180f8b237f6bc1ca5445cabc435ff22d92183&=&format=webp&width=1226&height=920", "https://media.discordapp.net/attachments/757329042490916945/1474899703538651478/IMG_20260221_164408.jpg?ex=699b86e3&is=699a3563&hm=71024e8723c0b06ef19de11bfaaa15562bbc5ee77feeec3cf5fb93db1ae24d0f&=&format=webp&width=690&height=920"];

    const containerRef = useRef(null);

    const [interval, setInterval] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const fireworks = new Fireworks(containerRef.current, {
            autoresize: true,
            opacity: 0.5,
            acceleration: 1.05,
            friction: 0.97,
            gravity: 1.5,
            particles: 100,
            traceLength: 4,
            traceSpeed: 10,
            explosion: 10,
            intensity: 50,
            flickering: 50,
            lineStyle: 'round',
            hue: {
                min: 0,
                max: 360
            },
            delay: {
                min: 30,
                max: 60
            },
            rocketsPoint: {
                min: 50,
                max: 50
            },
            lineWidth: {
                explosion: {
                min: 1,
                max: 3
                },
                trace: {
                min: 1,
                max: 2
                }
            },
            brightness: {
                min: 50,
                max: 90
            },
            decay: {
                min: 0.015,
                max: 0.03
            }
        });

        fireworks.start();

        const interval = setInterval(() => {
            setTime((prev) => {
            if (prev >= 100) {
                clearInterval(interval);
                fireworks.stop();
                return 100;
            }
            const increment = Math.floor(Math.random() * 100) + 1;
            return Math.min(prev + increment, 100);
            });
        }, 150);

      }, []);

    const randomizedImgs = React.useMemo(() => {
        return imgs.map((url, index) => ({
            url,
            top: 25 + index * 5 + "%",
            left: Math.floor(Math.random() * 90) + "%",
            rotation: Math.floor(Math.random() * 40) - 20 + "deg"
        }));
    }, []);

    return (
        <div className = "Surprise" ref = {containerRef}>
            <h1>Happy birthday Arthur!!  &lt;3</h1>
			<p> We're all really grateful to have you as a friend. Ur one of the coolest ppl ever. Hope you enjoyed the surprise!!! You have saved the KGC through wit and determination.
		</p>
            {randomizedImgs.map((imgData, index) => {
                return (<img key={index} src={imgData.url} style={{ 
                    top: imgData.top, 
                    left: imgData.left,
                    transform: `rotate(${imgData.rotation})`
                }} ></img>);
                })}
        </div>
    );
}

export default Surprise;
