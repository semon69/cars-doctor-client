import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, price, img, _id} = service;
    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl my-10">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title ">{title}</h2>
                    <div className='flex justify-between text-orange-600 text-lg font-bold'>
                        <p>Price: {price}</p>
                        <Link to={`/checkout/${_id}`}><button className="">{`>`}</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;