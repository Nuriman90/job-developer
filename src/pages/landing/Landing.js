import React from 'react';
import { Carousel } from 'flowbite-react';
import Images from '../../assets/images.jpeg';
import Tokopedia from '../../assets/tokopedia.jpeg';
import Telkomsel from '../../assets/telkomsel.jpeg';
import Apple from '../../assets/apple.png';
import Shopee from '../../assets/shopee.png';
import Pertamina from '../../assets/pertamina.png';
import Honda from '../../assets/honda.png';
import { Link } from 'react-router-dom';

const Landing = () => {

    const techs = [
        {
            id: 1,
            src: Apple,
            title: "Apple",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: Tokopedia,
            title: "Tokopedia",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: Shopee,
            title: "Shopee",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: Telkomsel,
            title: "Telkomsel",
            style: "shadow-yellow-500",
        },
        {
            id: 5,
            src: Honda,
            title: "Honda",
            style: "shadow-blue-500",
        },
        {
            id: 6,
            src: Pertamina,
            title: "Pertamina",
            style: "shadow-orange-600",
        }
    ];

    return (
        <>

            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 container w-5/6 mx-auto mt-7">
                <Carousel>
                    <img
                        src="https://awsimages.detik.net.id/community/media/visual/2021/11/16/ilustrasi-mencari-pekerjaan_169.jpeg?w=1200"
                        alt="slide 1"
                    />
                    <img
                        src="https://kazokku.com/blog/wp-content/uploads/2023/07/Cara-Merekrut-Software-Developer.jpg"
                        alt="slide 2"
                    />
                    <img
                        src="https://bprnatasha.com/upload/images/career/img_1RF3YH0.jpg"
                        alt="slide 3"
                    />
                </Carousel>
            </div>

            <section>
                <div className='w-full bg-white py-16 px-4'>
                    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                        <img className='w-[400px] mx-auto my-4' src={Images} alt='/' />
                        <div className='flex flex-col justify-center'>
                            <p className='text-[#00df9a] font-bold '>Lowongan Kerja Landing Page</p>
                            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Job Developer</h1>
                            <p>
                                Kami adalah salah satu perusahaan penyedia informasi lowongan pekerjaan terkemuka di Asia. Kami berperan sebagai fasilitator pencocokan dan komunikasi lapangan kerja antara pencari kerja dan perusahaan di Amerika, Singapura, Japan dan Indonesia.
                            </p>
                            <Link to="job-vacancy">
                                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Companies
                    </p>
                    <p className="py-6 font-bold">That Join Us</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <section>
                <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                    <div className='lg:col-span-2 my-4'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                            Want tips & tricks to optimize your CV?
                        </h1>
                        <p>Register now so you don't miss the latest job vacancies.</p>
                    </div>
                    <div className='my-4'>
                        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                            <input
                                className='p-3 flex w-full rounded-md text-black'
                                type='email'
                                placeholder='Enter Email'
                            />
                            <button className='bg-blue-600 text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                                Notify Me
                            </button>
                        </div>
                        <p>
                            We care bout the protection of your data. Read our{' '}
                            <span className='text-black font-bold'>Privacy Policy.</span>
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Landing