import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import ComicsPage from '../pages/ComicsPage';
import MainPage from '../pages/MainPage';
import Page404 from "../pages/404";
import SingleComicPage from "../pages/SingleComicPage";



const App = () => {

    return (
        <Router>
            <div className="app">
            <AppHeader/>
                <main>
                   <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/comics" element={<ComicsPage/>}/>
                        <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
                        <Route path="*" element={<Page404/>}/>
                   </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;