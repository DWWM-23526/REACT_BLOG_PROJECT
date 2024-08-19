import ListScreen from "../../components/screens/ListScreen";
import ArticleCard from "../../components/cards/ArticleCard";
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

function TechArticlesScreen() {
    const { id } = useParams();

    return (
        <ListScreen
            apiUrl={"http://api.php-blog-project.loc/tech/"+ id + "/articles"}
            title={"Articles de la Tech"}
            Card={ArticleCard}
        />
    );
}
export default TechArticlesScreen;