import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ArticleScreen from "./screens/article/ArticleScreen";
import HomeScreen from "./screens/home/HomeScreen";
import SeriesScreen from "./screens/series/SeriesScreen";
import TechsScreen from "./screens/techs/TechsScreen";
import SerieArticlesScreen from './screens/series/SerieArticlesScreen';
import TechArticlesScreen from './screens/techs/TechArticlesScreen';

function App() {
    return (
      <BrowserRouter>
        <div className="container-lg bg-light">
          <Navbar/>
          <main>
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/series" element={<SeriesScreen />} />
              <Route path="/techs" element={<TechsScreen />} />
              <Route path="/series/articles/:id" element={<SerieArticlesScreen/>} />
              <Route path="/techs/articles/:id" element={<TechArticlesScreen />} />
              <Route path="/article/:id" element={<ArticleScreen />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
}
export default App;