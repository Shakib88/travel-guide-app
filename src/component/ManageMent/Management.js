import React, { useEffect, useState } from 'react';

const Management = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch("https://intense-bayou-56490.herokuapp.com/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    const handleDelete = id => {
        const url = `https://intense-bayou-56490.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Delete')
                const reamaining = services.filter(service => service._id !== id);
            setServices(reamaining);
            
            }
            
        })
    }

    return (
        <div>
            <h2>Please manage your tripe</h2>
            <br />
            <br />
            <br />
            {
                services.map(service => <div key={service._id}>

                        <h3>Tripe Name: {service.Name}</h3>
                        <button onClick={() => handleDelete(service._id)}>Delete</button>
                        <button>Update</button>
                </div>)
            }

        </div>
    );
};

export default Management;