import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 relative'>
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white" />
                    </div>
                    <div className='w-1/2 space-y-5'>
                        <h1 className='text-2xl text-orange-500 font-bold'>About Us</h1>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="text-gray-400">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                        <button className="btn btn-error font-bold text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;