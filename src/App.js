import './App.css';
import Navbar from "./Components/navbar/Navbar";
import Page from "./Components/page/Page";
import React, {useEffect, useState} from "react";
import {usePalette} from 'react-palette';
import {createGlobalStyle} from 'styled-components';


function App() {
    const bibiliothecqueDImage = ['https://w.wallhaven.cc/full/01/wallhaven-01kgv4.jpg',

        'https://w.wallhaven.cc/full/4v/wallhaven-4vev8n.jpg', 'https://w.wallhaven.cc/full/43/wallhaven-43vgyn.jpg', 'https://w.wallhaven.cc/full/4d/wallhaven-4d38m0.jpg', 'https://w.wallhaven.cc/full/45/wallhaven-4535d7.jpg',
        'https://w.wallhaven.cc/full/nz/wallhaven-nzr9ry.jpg', 'https://w.wallhaven.cc/full/13/wallhaven-13jg59.jpg', 'https://w.wallhaven.cc/full/43/wallhaven-438w60.jpg', 'https://w.wallhaven.cc/full/4g/wallhaven-4gwzen.jpg',
        'https://w.wallhaven.cc/full/j5/wallhaven-j5mz95.png', 'https://w.wallhaven.cc/full/47/wallhaven-476z1v.jpg', 'https://w.wallhaven.cc/full/4l/wallhaven-4lz3k2.jpg', 'https://w.wallhaven.cc/full/13/wallhaven-13mk9v.jpg',
        'https://w.wallhaven.cc/full/r2/wallhaven-r2g7rm.jpg', 'https://w.wallhaven.cc/full/3k/wallhaven-3kqdo9.jpg', 'https://w.wallhaven.cc/full/d5/wallhaven-d5ojdj.jpg', 'https://w.wallhaven.cc/full/ey/wallhaven-eyx3pl.jpg',
        'https://w.wallhaven.cc/full/nz/wallhaven-nzz18w.jpg', 'https://w.wallhaven.cc/full/42/wallhaven-42k5qg.jpg', 'https://w.wallhaven.cc/full/4y/wallhaven-4y17e7.jpg', 'https://w.wallhaven.cc/full/4v/wallhaven-4vkl35.jpg',
        'https://w.wallhaven.cc/full/zx/wallhaven-zx93pv.jpg', 'https://w.wallhaven.cc/full/zx/wallhaven-zxgq5v.jpg', 'https://w.wallhaven.cc/full/2k/wallhaven-2kgd3m.png', 'https://www.teahub.io/photos/full/294-2949863_blurred-mountain-sunrise-wallpaper-evening.jpg'

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
