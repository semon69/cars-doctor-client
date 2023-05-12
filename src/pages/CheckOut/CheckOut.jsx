import React, { useContext } from 'react';
import {useLoaderData} from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const {_id, title, price, img, } = service;
    const {user} = useContext(AuthContext)
    const handleCheckout = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const amount = form.amount.value;
        const color = form.color.value;
        const size = form.size.value;
        const booking = {
            customerName : name,
            email,
            color,
            size,
            amount,
            date,
            service: title,
            service_id: _id,
            image: img,
        }
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            form.reset()
        })
    }
    return (
        <div>

            <h1 className='text-5xl text-center font-bold text-orange-700 my-10'>Booking service of: {title}</h1>

            <form onSubmit={handleCheckout} className="card-body p-20 bg-orange-50">
                <div className='flex gap-12'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" defaultValue={user?.displayName} name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" placeholder="Last Name" name='date' className="input input-bordered" />
                    </div>
                </div>
                <div className='flex gap-12'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" placeholder="Your Phone" name='amount' defaultValue={'$'+ price} className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" placeholder="Your Email" defaultValue={user?.email} name='email' className="input input-bordered" />
                    </div>
                </div>
                <div className='flex gap-12'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Color</span>
                        </label>
                        <input type="text" placeholder="Color" name='color' className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Size</span>
                        </label>
                        <input type="text" placeholder="Size" name='size' className="input input-bordered" />
                    </div>
                </div>
               
                <div className="form-control mt-6">
                    <input className="btn btn-error" type="submit" value="Check Out" />
                </div>
            </form>
        </div>

    );
};

export default CheckOut;