import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import img from '../assets/registration-hand-pressing-button-interface-blue-background-49410297.webp'
// import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../Provider/AuthProvider';
const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues:{
            role:'student'
        }
    });
    const { createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                // updateUserProfile(data.name, data.photoURL)
                //     .then(() => {
                //         const saveUser = { name: data.name, email: data.email,number:data.number,photoURL:data.photoURL,role:'student' }
                //         fetch('https://b7a12-summer-camp-server-side-roksana-barna.vercel.app/users', {
                //             method: 'POST',
                //             headers: {
                //                 'content-type': 'application/json'
                //             },
                //             body: JSON.stringify(saveUser)
                //         })
                    //         .then(res => res.json())
                    //         .then(data => {
                    //             if (data.insertedId) {
                    //                 reset();
                    //                 Swal.fire({
                    //                     position: 'top-end',
                    //                     icon: 'success',
                    //                     title: 'User created successfully.',
                    //                     showConfirmButton: false,
                    //                     timer: 1500
                    //                 });
                                    navigate('/');
                    //             }
                    //         })
                    // })
                    // .catch(error => console.log(error))
            })
    };

    return (
        <>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <div className="">
                        <img className='' src={img}alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Registration Number</span>
                                </label>
                                <input type="number"  {...register("number", { required: true })} name="number" placeholder="number" className="input input-bordered" />
                                {errors.number&& <span className="text-red-600">Registration number is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase,One Special Character</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Confirm Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} placeholder=" Confirm password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase,One Special Character</p>}
                              
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                           
                           
                            <div className="form-control mt-6">
                                <input className="btn bg-blue-900 text-white" type="submit" value="Register" />
                            </div>
                            {/* <SocialLogin></SocialLogin> */}
                        </form>
                        <p className='mb-6'><small className='text-blue-900 pl-8 '>Already have an account?? <button className='bg-blue-900 text-white px-4 py-1 rounded-2xl'><Link to="/login">Login</Link></button></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;