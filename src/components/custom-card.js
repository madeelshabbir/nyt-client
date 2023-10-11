import React from 'react';
import { Badge, Card } from 'react-bootstrap';

const CustomCard = ({ title, image, url, section, subsection }) => {
  return (
    <Card style={{ width: '18rem', height: '25rem' }} className='my-3'>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          height="250"
          width="250"
          className="cursor-pointer"
        />
      </a>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div>
          <Badge pill variant="info" className="m-1">
            {section}
          </Badge>
          <Badge pill variant="info" className="m-1">
            {subsection}
          </Badge>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
