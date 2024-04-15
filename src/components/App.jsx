import React, {useRef} from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Work from './Work';
import Experience from './Experience';
import Contact from './Contact';

function App(){

    const backgroundDOM = useRef(null);

    return <div>
        <NavBar />
        <div id='pageContent' ref={backgroundDOM}>
            <Home  />
            <div id='centeredContent'>
                <About />
                <Work /> 
                <Experience />
                <Contact />
            </div>
        </div>
    </div> 
    
}

export default App;