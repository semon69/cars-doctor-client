import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Registration = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, email, confirmPassword)
        createUser(email, confirmPassword)
            .then(result => {
                console.log(result.user)
                updateUser(name)
                form.reset()
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-16">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center text-orange-500">Sign Up</h1>
                            <form onSubmit={handleRegister}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                    
                                </div> */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="text" placeholder="confirm password" name='confirmPassword' className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-error" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <div>
                                <p>Already have an account? <Link className='text-orange-600' to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;