import './App.css';
import Navbar from "./Components/navbar/Navbar";
import Page from "./Components/page/Page";
import React, {useEffect, useState} from "react";
import {usePalette} from 'react-palette';
import {createGlobalStyle} from 'styled-components';


function App() {
    const bibiliothecqueDImage = ['https://images.unsplash.com/photo-1495640452828-3df6795cf69b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',

    ]

    const [imgeUrl, setUrl] = useState('');


    useEffect(() => {
            setUrl(bibiliothecqueDImage[Math.floor(Math.random() * bibiliothecqueDImage.length)])
        }, []
    )


    const {data} = usePalette(imgeUrl)
    const AppStyle = createGlobalStyle`html {


      --bg-img: url(${imgeUrl});

      --primary: ${data.vibrant};
      --secondary: ${data.muted};

      --primary-light: ${data.lightVibrant};
      --secondary-light: ${data.lightMuted};


      --primary-dark: ${data.darkVibrant};
      --secondary-dark: ${data.darkMuted};


    }`;
    return (
        <div>
            <AppStyle/>
            <Navbar/>

            <Page/>
        </div>
    );
}

export default App;
