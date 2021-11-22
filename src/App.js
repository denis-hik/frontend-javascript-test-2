import style from './App.module.css';
import Header from "./compomemts/Header/Header";
import Content from "./compomemts/Content/Content";

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
