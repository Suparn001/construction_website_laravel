import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Header />
            <main>
                <div className='container my-5 d-flex justify-content-center'>
                    <div className='login-form'>
                        <div className='card border-0 shadow'>
                            <div className='card-body p-4'>
                                <h4 className='mb-3'>Login Here</h4>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='mb-3'>
                                        <label htmlFor="" className='form-label'>Email</label>
                                        <input
                                            {
                                            ...register('email', {
                                                required: 'Email is required'
                                            })
                                            }
                                            type="text" placeholder='Email' className={`form-control ${errors.email && 'is-invalid'}`} />
                                        {
                                            errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>
                                        }
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor="" className='form-label'>Password</label>
                                        <input
                                            {
                                            ...register('password', {
                                                required: 'Password is required'
                                            })
                                            }

                                            type="password" placeholder='Password' className={`form-control ${errors.email && 'is-invalid'}`} />
                                        {
                                            errors.email && <p className='invalid-feedback'>{errors.password?.message}</p>
                                        }
                                    </div>

                                    <button type="submit" className='btn btn-primary'>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

        </>
    )
}

export default Login
