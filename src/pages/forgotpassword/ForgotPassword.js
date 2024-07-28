import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <section>

            <div className='min-h-screen bg-gray-50 flex flex-col justify-center'>
                <div className='max-w-md w-full mx-auto'>
                    <div className='text-center text-xl font-bold'>Forgot Password To Account</div>
                    <div className='text-3xl font-bold text-gray-900 mt-2 text-center'></div>
                </div>
                <div className='max-w-md w-full mx-auto bg-white p-8 border bordergray-300'>
                    <form className='space-y-6'>
                        <div>
                            <label className='text-sm font-bold text-gray-600 block'>Email</label>
                            <input
                                name='email'
                                type='email'
                                required="required"
                                placeholder="Tes123@gmail.com"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div>
                            <button type={'submit'} className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm'>Submit</button>
                        </div>
                        <p className="text-sm font-light text-black">Don’t have an account yet? <Link to="/register" className="font-medium text-blue-500 hover:underline">Sign up</Link></p>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default ForgotPassword