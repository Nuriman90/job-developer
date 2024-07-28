import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useParams } from 'react-router-dom';

const FormData = () => {
    let { IdData } = useParams()
    const { state, handleFunction } = useContext(GlobalContext)
    const {
        input, setInput,
        data, setData,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId
    } = state

    const {
        handleDelete,
        handleEdit,
        handleInput,
        handleSubmit,
        rupiah,
        handleText
    } = handleFunction

    useEffect(() => {
        if (IdData !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${IdData}`)
                .then((res) => {
                    let data = res.data
                    //  console.log(data)
                    setInput(
                        {
                            title: data.title,
                            job_description: data.job_description,
                            job_qualification: data.job_qualification,
                            job_type: data.job_type,
                            job_tenure: data.job_tenure,
                            job_status: data.job_status,
                            company_name: data.company_name,
                            company_image_url: data.company_image_url,
                            company_city: data.company_city,
                            salary_min: data.salary_min,
                            salary_max: data.salary_max,
                        }
                    )
                })
        }
    }, [IdData,setInput])
    // console.log(data)

    return (
        <div className='bg-gray-50 py-3 px-5 mr-5 rounded-lg mt-3 min-h-full overflow-x-hidden'>
            <h1 className="text-xl font-medium uppercase mb-7 border-b-2 text-gray-800 dark:text-gray-100">Add new job</h1>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <div className='mb-2'>
                            <label className='text-sm font-bold text-gray-600 block'>Title</label>
                            <input
                                onChange={handleInput}
                                name='title'
                                value={input.title}
                                type='string'
                                required="required"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-bold text-gray-600 block'>Company Name</label>
                            <input
                                onChange={handleInput}
                                name='company_name'
                                value={input.company_name}
                                type='string'
                                required="required"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-bold text-gray-600 block'>Company City</label>
                            <input
                                onChange={handleInput}
                                name='company_city'
                                value={input.company_city}
                                type='string'
                                required="required"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-bold text-gray-600 block'>Company Image Url</label>
                            <input
                                onChange={handleInput}
                                name='company_image_url'
                                value={input.company_image_url}
                                type='string'
                                required="required"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-bold text-gray-600 block'>Salary Min</label>
                            <input
                                onChange={handleInput}
                                name='salary_min'
                                value={input.salary_min}
                                type='number'
                                required="required"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-bold text-gray-600 block'>Salary Max</label>
                            <input
                                onChange={handleInput}
                                name='salary_max'
                                value={input.salary_max}
                                type='number'
                                required="required"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                    </div>
                    <div>
                        <div className='mb-2'>
                            <label className='text-sm font-bold text-gray-600 block'>Job Type</label>
                            <input
                                onChange={handleInput}
                                name='job_type'
                                value={input.job_type}
                                type='string'
                                required="required"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-bold text-gray-600 block'>Job Tenure</label>
                            <input
                                onChange={handleInput}
                                name='job_tenure'
                                value={input.job_tenure}
                                type='string'
                                required="required"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-bold text-gray-600 block'>Job Status</label>
                            <input
                                onChange={handleInput}
                                name='job_status'
                                value={input.job_status}
                                type='number'
                                min={0} max={1}
                                required="required"
                                placeholder="0 untuk Ditutup, 1 untuk Dibuka"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-bold text-gray-600 block'>Job Description</label>
                            <textarea
                                onChange={handleInput}
                                name='job_description'
                                value={input.job_description}
                                type='string'
                                required="required"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div className='mb-2'>
                            <label className='text-sm font-bold text-gray-600 block'>Job Qualification</label>
                            <textarea
                                onChange={handleInput}
                                name='job_qualification'
                                value={input.job_qualification}
                                type='string'
                                required="required"
                                className='w-full p-2 border border-gray-300 rounded mt-1' />
                        </div>
                        <div className='mb-2'>
                            <button
                                type='submit'
                                className="flex items-center justify-center text-sm sm:text-md text-white rounded-md transition duration-200 bg-indigo-400 hover:bg-indigo-500 w-full py-2 px-4">Add New Job
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormData