// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
const Catagories = () => {
    const {id}= useParams ();
    const catagorireNews=useLoaderData()
    console.log(catagorireNews)
    return (
        <div>
         {id &&   <h2>Category {id}</h2> }
           {
            catagorireNews.map(news=> console.log(news))
           }
           {
            catagorireNews.map(news=> <NewsCard news={news} key={news.id}></NewsCard>)
           }
        </div>
    );
};
export default Catagories;