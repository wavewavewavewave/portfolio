import './App.css';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/Main/Main";
import {Projects} from "./layout/Projects/Projects";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
        </div>
    );
}

export default App;
