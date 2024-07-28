import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Password = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const [input, setInput] = useState({
        current_password: "",
        new_password: "",
        new_confirm_password: ""
    });

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    let navigate = useNavigate();

    const [fetchStatus, setFetchStatus] = useState(true);

    const handleInput = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        setInput({ ...input, [name]: value });
    };

    const handleSubmit = (event) => {
        // console.log('token')
        event.preventDefault();

        let { current_password, new_password, new_confirm_password } = input;

        axios.post("https://dev-example.sanbercloud.com/api/change-password",
            {
                current_password,
                new_password,
                new_confirm_password
            },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') } }
        ).then((res) => {
            setFetchStatus(true);
            navigate('/dashboard');
            
        })
            .catch((error) => {
                alert(error);
            })
    }

    return (
        <div className='bg-gray-50 py-3 px-5 mr-5 rounded-lg mt-3 min-h-full overflow-x-hidden w-2/4'>
            <h1 className="text-xl font-medium uppercase mb-7 border-b-2 text-gray-800 dark:text-gray-100">Change Password</h1>

            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label className='text-sm font-bold text-gray-600 block'>Current Password</label>
                    <input
                        onChange={handleInput}
                        name='current_password'
                        value={input.password}
                        type='password'
                        className='w-full p-2 border border-gray-300 rounded mt-1' />
                </div>
                <div className='mb-2'>
                    <label className='text-sm font-bold text-gray-600 block'>New Password</label>
                    <input
                        onChange={handleInput}
                        name='new_password'
                        value={input.password}
                        type='password'
                        className='w-full p-2 border border-gray-300 rounded mt-1' />
                </div>
                <div className='mb-2'>
                    <label className='text-sm font-bold text-gray-600 block'>New Confirm Password</label>
                    <input
                        onChange={handleInput}
                        value={input.password}
                        name='new_confirm_password'
                        type='password'
                        className='w-full p-2 border border-gray-300 rounded mt-1' />
                </div>
                <div className='mb-2'>
                    <button
                        type='submit'
                        className="flex items-center tracking-wider justify-center text-sm sm:text-md text-white rounded-md transition duration-200 bg-indigo-400 hover:bg-indigo-500 w-3/6 py-2 px-4">Change Password</button>
                </div>
            </form>

        </div>
    )
}

export default Password