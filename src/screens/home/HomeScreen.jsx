import "./HomeScreen.css";
import ListScreen from "../../components/screens/ListScreen";
import ArticleCard from "../../components/cards/ArticleCard";

function HomeScreen() {
    return (
        <ListScreen
            apiUrl="http://api.php-blog-project.loc/article?orderby=published_at&sort=DESC&limit=12"
            title="Accueil"
            Card={ArticleCard}
        />
    );
}
export default HomeScreen;
