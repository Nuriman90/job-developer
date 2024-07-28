import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDollarToSlot, faLocationDot, faBuilding } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'flowbite-react';

const Job = () => {
    // Data
    const [data, setData] = useState(null);

    // Indikator 
    const [fetchStatus, setFetchStatus] = useState(true);

    useEffect(() => {
        let fetchData = async () => {
            let result = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
            let data = result.data.data

            setData(data)
        }
        if (fetchStatus) {
            fetchData()
            setFetchStatus(false)
        }
    }, [fetchStatus])
    // console.log(data)

    // Format Uang
    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    };

    // Seacrh
    const [seacrh, setSeacrh] = useState("")
    const handleChangeSeacrh = (event) => setSeacrh(event.target.value)
    const handleSeacrh = (event) => {
        event.preventDefault()
        // console.log(seacrh)
        let fetchData = async () => {
            let result = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
            let data = result.data.data
            // console.log(data)
            // setData(data)
            let searchData = data.filter((res) => {
                // console.log(res)
                return Object.values(res).join(" ").toLowerCase().includes(seacrh.toLowerCase())
            })
            // console.log(searchData)
            setData([...searchData])
        }
        fetchData();
        setSeacrh("")
    }

    // Filter name
    const [filter, setFilter] = useState({
        title: "",
        company_name: "",
        company_city: ""
    })

    const handleChangeFilter = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value })
    }

    const handleFilter = (event) => {
        event.preventDefault()
        // console.log(filter)
        let fetchData = async () => {
            let result = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
            let data = result.data.data
            // console.log(data)
            // setData(data)
            let filterData = data.filter((res) => {
                // console.log(res)
                return res.title === filter.title && res.company_name === filter.company_name && res.company_city === filter.company_city
            })
            // console.log(searchData)
            setData([...filterData])
        }
        fetchData();
        setSeacrh("")
    }

    return (
        <div className='min-h-screen bg-gray-200 w-screen flex-col justify-center py-10'>
            {/* Seacrh */}
            <div className='grid'>
                <form onSubmit={handleSeacrh} className="justify-self-center">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative w-96">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input onChange={handleChangeSeacrh} value={seacrh} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Title..." />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                {/* <button className='bg-red-600 rounded-lg text-white w-28' onClick={() => setFetchStatus(true)}>Reset Data</button> */}
                {/* Filter */}
                <div className='w-80 justify-self-center mt-5 border-2'>
                    <Accordion alwaysOpen={true}>
                        <Accordion.Panel>
                            <Accordion.Title>
                                <div className='text-black font-semibold'>Filter Data</div>
                            </Accordion.Title>
                            <Accordion.Content>
                                <form onSubmit={handleFilter}>
                                    <div>
                                        <div className='mb-6'>
                                            <label htmlFor='small-input' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Title</label>
                                            <input onChange={handleChangeFilter} placeholder='Front End' value={filter.title} name='title' type='text' id="small-input" className='block w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 ' />
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='small-input' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Company Name</label>
                                            <input onChange={handleChangeFilter} placeholder='Gojek' value={filter.company_name} name='company_name' type='text' id="small-input" className='block w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500' />
                                        </div>
                                        <div className='mb-6'>
                                            <label htmlFor='small-input' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Company City</label>
                                            <input onChange={handleChangeFilter} placeholder='Jakarta' value={filter.company_city} name='company_city' type='text' id="small-input" className='block w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500' />
                                        </div>
                                    </div>
                                    <button type='submit' className='w-20 p-3 m-5 text-white bg-blue-600 rounded-lg'>Filter</button>
                                </form>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>

            <h1 className='text text-2xl font-bold p-7 lg:pl-0 text-center'>Job Vacancy</h1>
            <div className='w-full flex flex-wrap justify-center items-center gap-4 lg:justify-center'>
                {
                    data !== null &&
                    data.map((res) => {
                        return (
                            <div key={res.id} className='w-full h-96 max-w-xs p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl'>
                                <div className='grid'>
                                    <img className='h-32 w-52 justify-self-center object-cover rounded-lg' src={res.company_image_url} alt='list' />
                                </div>
                                <div className='p-2'>
                                    <h2 className='font-bold text-lg'>{res.title}</h2>
                                    <div className='flex p-1'>
                                        <FontAwesomeIcon icon={faBuilding} />
                                        &nbsp;
                                        <p className='text-sm text-gray-600'>{res.company_name}</p>
                                    </div>
                                    <div className='flex p-1'>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        &nbsp;
                                        <p className='text-sm text-gray-600'>{res.company_city}</p>
                                    </div>
                                    <div className='flex p-1'>
                                        <FontAwesomeIcon icon={faCircleDollarToSlot} />
                                        &nbsp;
                                        <p className='text-sm text-gray-900'>Salary up to</p>
                                    </div>
                                    <p className='text-sm text-black font-bold'>{rupiah(res.salary_min)} - {rupiah(res.salary_max)} </p>
                                </div>
                                <div className='m-2'>
                                    <button className='text-white bg-blue-600 px-3 py-2 rounded-md hover:bg-blue-700 w-full cursor-pointer'>
                                        <Link to={`/job-detail/${res.id}`} key={res.id}>
                                            Learn More
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Job