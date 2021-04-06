import React, {useCallback} from 'react'
import './Page.module.scss';
import Welcome from "../welcome/Welcome";
import Me from "../me/Me";
import css from "./Page.module.scss";
import {useSpring} from 'react-spring'
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";


function Page() {
    const [{xy}, set] = useSpring(() => ({xy: [0, 0]}))


    const interBT = xy.interpolate((x, y) => `perspective(400px) rotateY(${x / 60}deg) rotateX(${y / 60}deg) scale(0.8)`);
    const onMove = useCallback(({
                                    clientX: x,
                                    clientY: y
                                }) => set({xy: [x - window.innerWidth / 2, y - window.innerHeight / 2]}), []);


    return (
        <div className={css.page} onMouseMove={onMove}>
            {/*<animated.div className={css.bitime} style={{backgroundImage: 'url(' + bt + ')', transform: interBT}}/>*/}
            <Welcome/>
            <Me/>
            <Skills/>
            {/*<Projects/>*/}
            <Contact/>


        </div>
    );
}

export default Page;
