import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import ArticleScreen from "./screens/article/ArticleScreen";
import HomeScreen from "./screens/home/HomeScreen";
import SeriesScreen from "./screens/series/SeriesScreen";
import TechsScreen from "./screens/techs/TechsScreen";

function App() {
    return (
        <div className="container-lg bg-light">
          <Navbar/>
          <HomeScreen />
          <SeriesScreen />
          <TechsScreen />
        </div>
    );
}
export default App;