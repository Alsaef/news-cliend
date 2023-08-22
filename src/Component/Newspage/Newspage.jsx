// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
const Newspage = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div className='mt-5'>
            <Card >
      <Card.Img variant="top" src={news.image_url} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>
        {news.details}
        </Card.Text>
       <Link to={`/category/${news.category_id}`}> <Button variant="danger">Back All News <FaArrowAltCircleLeft /> </Button></Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Newspage;