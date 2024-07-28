import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
    let { slug } = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        if (slug !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${slug}`)
                .then((res) => {
                    setData(res.data)
                })
        }

    }, [slug])
    // console.log(data)

    // Format Uang
    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    };

    return (
        <div>
            <div className="m-10 lg:mt-24 lg:mb-6 lg:mx-28">
                <h3 className="text-4xl leading-6 font-medium text-gray-900">Job Information</h3>
            </div>
            <div className='bg-white shadow-xl border-2 mx-10 lg:mx-24 lg:p-8 overflow-hidden sm:rounded-lg'>

                <div className='px-4 py-5 flex flex-row justify-between sm:px-6'>
                    <div className="flex justify-between gap-x-5 pb-4">
                        <div className="flex gap-x-5 md:gap-x-10">
                            <img src={data?.company_image_url} alt="logo" className="h-14 w-14 rounded-full md:h-32 md:w-32" />
                            <div className="flex flex-col justify-center">
                                <h1 className="text-lg font-bold md:text-3xl">{data?.title}</h1>
                                <p className="md:text-md text-sm">{data?.company_name}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t border-gray-200'>
                    <div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt className="text-sm font-medium text-gray-500">Job Description</dt><dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data?.job_description}</dd></div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt className="text-sm font-medium text-gray-500">Application for</dt><dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data?.title}</dd></div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt className="text-sm font-medium text-gray-500">Job Qualification</dt><dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data?.job_qualification}
                        </dd></div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt className="text-sm font-medium text-gray-500">Job Location</dt><dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data?.company_city}</dd></div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt className="text-sm font-medium text-gray-500">Job Tenure</dt><dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data?.job_tenure}</dd></div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt className="text-sm font-medium text-gray-500">Job Type</dt><dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data?.job_type}</dd></div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt className="text-sm font-medium text-gray-500">Salary Range</dt><dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{rupiah(data?.salary_min)} - {rupiah(data?.salary_max)}</dd></div>
                    </div>
                    <div className='text-end'>
                        <button type={'submit'} className='w-40 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm'>Apply</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default JobDetail