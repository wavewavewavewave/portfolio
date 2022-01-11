import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyProjects from "./myProjects/MyProjects";
import Remote from "./remote/Remote";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills />
            <MyProjects/>
            <Remote />
        </div>
    );
}

export default App;
