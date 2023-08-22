/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import moment from 'moment';
import { FaStar,FaEye} from 'react-icons/fa';
const NewsCard = ({news}) => {
    return (
        <div className='mb-2'>
            <Card >
      <Card.Header >
      <div className='d-flex align-items-cente'>
      <Image src={news.author.img} style={{height:'40px'}} roundedCircle />
       <div>
       <span className='px-2'>{news.author.name}</span> 
       <p className='text-center'>{moment(news.author.published_date).format('YYYY MM D')} {}</p>
       </div>
      </div>
     
      </Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={news.image_url} />
        <Card.Title>{news.title.slice(0,40)}...</Card.Title>
        <Card.Text>
        {news.details.slice(0,120)}...<Link to={`/news/${news._id}`} className='text-primary'>Read More</Link>
        </Card.Text>
      </Card.Body>
      <Card.Header className='d-flex justify-content-between'>
  <div>
  <p><small > <span>Rating  {news.rating.number}</span> <FaStar className='text-warning pb-1' /></small></p>
  </div>
    <div>
    <p> <span>View {news.total_view}</span> <FaEye className='pb-1'/> </p>
    </div>
      </Card.Header>
    </Card>  
        </div>
    );
};

export default NewsCard;