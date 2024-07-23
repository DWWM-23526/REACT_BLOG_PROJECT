/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import ArticleCard from '../../components/articleCard/ArticleCard';
import './HomeScreen.css';

function HomeScreen() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
        
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const url = "http://api.php-blog-project.loc/article/120";
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Erreur de réseau');
                }
                const result = await response.json();
                console.log(result);
                setData(result || {});
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 
    
    return ( 
        <main className="mt-5 pt-3 row">
            {loading && 
                <p className='col-12 text-center'>
                    Chargement des données ...
                </p>} 
            {('id_article' in data)
                ? <ArticleCard article={data} />
                : !loading && <p className='col-12 text-center'>
                    Aucun article trouvé ...
                </p>}
        </main>
    );
}
export default HomeScreen;