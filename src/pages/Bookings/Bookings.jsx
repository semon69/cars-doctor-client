import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingCard from './BookingCard';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookings(data)
            })
    }, [])
    const handleDelete = id => {
        const proceed = confirm('Are you confirm to delete')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        alert('Delete Successful')
                        const remaining = bookings.filter(booking => booking._id != id)
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => booking._id == id)
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
        })
    }
    return (
        <div>
            <h2 className='text-5xl text-center text-orange-600 font-bold'>Booking number: {bookings.length}</h2>
            {
                bookings.map(booking => <BookingCard
                    key={booking._id}
                    booking={booking}
                    handleDelete ={handleDelete}
                    handleConfirm ={handleConfirm}
                ></BookingCard>)
            }
        </div>
    );
};

export default Bookings;