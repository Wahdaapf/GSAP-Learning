import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const App = () => {
    // const gsapRef = useRef()

    // useGSAP(() => {
    //   gsap.to(gsapRef.current, {
    //     x: 1000,
    //     duration: 2,
    //     delay: 1,
    //     rotate: 720
    //   })
    // })

    // const container = useRef()

    // useGSAP(() => {
    //   gsap.from(".box", {
    //     opacity: 0,
    //     duration: 1,
    //     delay: 0.5,
    //     rotate: 360,
    //     scale: 0
    //   })
    // }, {scope: container})

    const [circle, setCircle] = useState(0);
    const circleRef = useRef();
    const random = gsap.utils.random(-500, 500, 10);

    useEffect(() => {
        gsap.to(circleRef.current, {
            x: circle,
            duration: 0.5,
        });
    }, [circle]);
    return (
        <main>
            {/* <div ref={gsapRef} className="box1"></div> */}
            {/* <div ref={container} className="container">
              <div className="circle"></div>
              <div className="box"></div>
            </div>
            <div className="kuch">
              <div className="circle"></div>
              <div className="box"></div>
            </div> */}
            <button
                onClick={() => {
                    setCircle(random);
                }}
            >
                Click Me
            </button>
            <div ref={circleRef} className="circle"></div>
        </main>
    );
};

export default App;
