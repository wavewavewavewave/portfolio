import './App.css';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/Main/Main";
import {Projects} from "./layout/Projects/Projects";
import {Skills} from "./layout/Skills/Skills";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Skills />
        </div>
    );
}

export default App;
