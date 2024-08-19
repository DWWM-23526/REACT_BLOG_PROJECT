import ListScreen from "../../components/screens/ListScreen";
import ArticleCard from "../../components/cards/ArticleCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SerieArticlesScreen() {
    const { id } = useParams();
    const [serie, setSerie] = useState({});

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch("http://api.php-blog-project.loc/serie/" + id);
                if (!response.ok) {
                    throw new Error('Erreur de réseau');
                }
                const result = await response.json();
                console.log(result);
                setSerie(result || {});
            } catch (error) {
                console.log(error);
            } 
        };
        fetchData();
    },[id])

    return (
        <ListScreen
            apiUrl={"http://api.php-blog-project.loc/article?where=id_serie=" + id}
            title={"Articles de la Série " + (serie.title || "")}
            Card={ArticleCard}
        />
    );
}
export default SerieArticlesScreen;