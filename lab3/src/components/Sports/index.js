import React,{useState, useEffect} from 'react'
import { getSportsNews } from '../../API/getSportsNews'
import './index.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sports(){
    const [news, setNews] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await getSportsNews()
            console.log('result',result)
            if (result) {
                setNews(result);
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            {news.length === 0 ? (
                <div><h1>Loading...</h1></div>
            ) : (
                <Carousel>
                    {news.map((article, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={article.urlToImage}
                                alt={article.title}
                            />
                            <Carousel.Caption>
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
        </div>
    )

}
export default Sports;