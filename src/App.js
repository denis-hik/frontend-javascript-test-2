import style from './App.module.css';
import Header from "./compomemts/Header/Header";
import Content from "./compomemts/Content/Content";
import BookDialog from "./compomemts/BookDialog/BookDialog";

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <Content/>
            <BookDialog />
        </div>
    );
}

export default App;
