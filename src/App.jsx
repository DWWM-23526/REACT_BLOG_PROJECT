import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import ArticleScreen from "./screens/article/ArticleScreen";
import HomeScreen from "./screens/home/HomeScreen";

function App() {
    return (
        <div className="container-lg bg-light">
          <Navbar/>
          <HomeScreen />
        </div>
    );
}
export default App;