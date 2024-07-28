import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const TableData = () => {
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
        if (fetchStatus === true) {
            axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
                .then((res) => {
                    setData(res.data.data)
                })
                .catch(() => {
                })
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus, setData])
    // console.log(data)

    // Job Status
    const handlejob = (params) => {
        if (params > 0) {
            return "open";
        } else if (params < 1) {
            return "close";
        }
    };

    return (
        <>
            <div className='flex-auto bg-white overflow-auto h-full'>
                <table className='justify-self-center self-center w-full table-auto rounded-t-xl bg-blue-600'>
                    <thead>
                        <tr className='text-white'>
                            <th className='p-3'>NO</th>
                            <th className='p-3'>TITLE</th>
                            <th className='p-3'>DESCRIPTION</th>
                            <th className='p-3'>QUALIFICATION</th>
                            <th className='p-3'>TYPE</th>
                            <th className='p-3'>TENURE</th>
                            <th className='p-3'>STATUS</th>
                            <th className='p-3'>COMPANY</th>
                            <th className='p-3'>IMAGE</th>
                            <th className='p-3'>CITY</th>
                            <th className='p-3'>SALARY</th>
                            <th className='p-3'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className='text-center p-10 bg-white'>
                        {data !== null &&
                            data.map((res, index) => (
                                <tr key={res.id} className='border-b-2'>
                                    <td className='p-3'>{index + 1}</td>
                                    <td className='p-3'>{res.title}</td>
                                    <td className='p-3'>{handleText(res.job_description)}</td>
                                    <td className='p-3'>{handleText(res.job_qualification)}</td>
                                    <td className='p-3'>{res.job_type}</td>
                                    <td className='p-3'>{res.job_tenure}</td>
                                    <td className='p-3'>{handlejob(res.job_status)}</td>
                                    <td className='p-3'>{res.company_name}</td>
                                    <td className='p-3'>
                                        <img className='w-7 h-7' src={res.company_image_url} alt="logo" />
                                    </td>
                                    <td className='p-3'>{res.company_city}</td>
                                    <td className='p-3'>{rupiah(res.salary_min)} {rupiah(res.salary_max)}</td>
                                    <td>
                                        <div className='flex justify-center'>
                                            <button onClick={handleEdit} value={res.id} type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Edit
                                            </button>
                                            &nbsp;
                                            <button onClick={handleDelete} value={res.id} type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default TableData