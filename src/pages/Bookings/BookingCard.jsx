import React from 'react';

const BookingCard = ({ booking, handleDelete, handleConfirm }) => {
    const { image, service, customerName, amount, color, size, date, _id, status } = booking;
    // const handleDelete = id => {
    //     const proceed = confirm('Are you confirm to delete')
    //     if (proceed) {
    //         fetch(`http://localhost:5000/bookings/${id}`, {
    //             method: "DELETE"
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 if(data.deletedCount > 0){
    //                     alert('Delete Successful')
    //                 }
    //             })
    //     }
    // }
    return (
        <div className='my-10'>
            <div className="card card-side bg-base-100 shadow-xl">

                <div className="card-body">
                    <div className='flex justify-between items-center'>

                        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <figure><img className='w-56' src={image} alt="Cars" /></figure>

                        <div>
                            <h2 className="card-title">{customerName}</h2>
                            <p>Color: {color}</p>
                            <p>Size: {size}</p>
                        </div>
                        <div>
                            <p>${amount}</p>
                        </div>
                        <div>
                            <p>{date}</p>
                        </div>
                        <div className="card-actions justify-end">
                            {
                                status == 'confirm' ? <span className='font-bold text-green-700'>Confirmed</span>
                                    :

                                    <button onClick={() => handleConfirm(_id)} className="btn btn-error">Please Confirm</button>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookingCard;