import './App.css';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/Main/Main";
import {Projects} from "./layout/Projects/Projects";
import {Skills} from "./layout/Skills/Skills";
import {Experience} from "./layout/Experience/Experience";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <Experience/>
        </div>
    );
}

export default App;
