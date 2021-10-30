import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({})

    useEffect( () => {
        fetch(`https://intense-bayou-56490.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, [])

    return (
        <div>
            <h2>Details of: {service.Name}</h2>
            <Card>
        <Card.Img variant="top" src={service.image} />
        <Card.Body>
        
          <Card.Text>
            {service.description}
          </Card.Text>

          <Card.Text>
            <p>Package:$ {service.price}</p>
          </Card.Text>
          <Link to="/address"> <button className="btn btn-info">Confrom</button></Link>
        </Card.Body>
      </Card>

             
        </div>
    );
};

export default Booking;


// Booking this : {serviceId}