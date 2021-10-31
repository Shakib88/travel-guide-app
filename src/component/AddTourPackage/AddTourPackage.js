import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddTour.css';

const AddTourPackage = () => {
    const { register, handleSubmit, reset} = useForm();
  const onSubmit = data => {
      
    console.log(data);

    axios.post('https://intense-bayou-56490.herokuapp.com/services',data)
        .then(res => {
            if(res.data.insertedId){
                alert('Thank you , added successfully');
                reset();
            }
            console.log(res);
        })
}

    return (
        <div className="add-tour">
            <h1>Plase add a Tour Trip </h1>


            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name", )} placeholder="Location Name" />
            <input type="number" {...register("price")} placeholder="Tripe price" />

            <textarea {...register("description", )} placeholder="description" />
             
            <input {...register("image")} placeholder="Image URL"/>
            <input type="submit" />
            </form>
           
           
     <br />



    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
        </div>
        

        
    );
   
};

    
export default AddTourPackage;