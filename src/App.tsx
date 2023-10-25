import './App.css';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/Main/Main";
import {Projects} from "./layout/Projects/Projects";
import {Skills} from "./layout/Skills/Skills";
import {Experience} from "./layout/Experience/Experience";
import {Footer} from "./layout/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <Experience/>
            <Footer />
        </div>
    );
}

export default App;
