import { useState } from 'react';
import Control from '../assets/control.png';
import { useNavigate } from 'react-router-dom';
import { faAdd, faList, faKey, faRightFromBracket, faDashboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from 'js-cookie';
import Saya from '../assets/saya.jpg'

function Layout({ children }) {
    const [active, setActive] = useState('');
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const Menus = [
        { title: "Dashboard", icon: faDashboard, to: '/dashboard' },
        { title: "List Job", icon: faList, to: '/table-data' },
        { title: "Add New Job", icon: faAdd, to: '/create' },
        { title: "Change Password", icon: faKey, to: '/change-password' },
        {
            title: "Logout",
            icon: faRightFromBracket,
            clik: () => handleLogout(),
            gap: 'true',
        }
    ]

    const handleLogout = () => {
        Cookies.remove('token')
        Cookies.remove('user')
        // console.log('tes')
        window.location.href = "/login"
    }

    return (
        <div className='flex'>
            <div className={`${open ? `w-72` : "w-20"} duration-300 h-screen p-5 pt-8 bg-blue-400 relative`}>
                <img src={Control} alt={'control'}
                    className={`absolute cursor-pointer rounded-full
                    -right-3 top-9 w-7 border-2  border-red-500 ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src={Saya} alt={'logo'}
                        className={`cursor-pointer duration-500 rounded-full w-24 h-24 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <div className='flex-col'>
                        <h1
                            className={`text-black origin-left font-extrabold text-lg duration-200 ${!open && "scale-0"
                                }`}
                        >
                            Nur Iman
                        </h1>
                        <h1
                            className={`text-black origin-left font-medium text-sm duration-200 ${!open && "scale-0"
                                }`}
                        >
                            Admin
                        </h1>
                    </div>
                </div>
                <ul className='pt-6'>
                    {Menus.map((menu, index) => {
                        const clickActive = (idx) => {
                            menu.clik ? menu.clik() : navigate(menu.to);

                            setActive(idx)
                        }
                        return (
                            <li onClick={() => clickActive(index)} key={index} className={`text-black text-base font-medium flex items-center gap-x-4 cursor-pointer p-2 hover:bg-purple-700 rounded-md ${menu.gap ? 'mt-12' : 'mt-2'} ${active === index && 'bg-purple-700'}`}>
                                {
                                    <FontAwesomeIcon icon={menu.icon} />
                                }
                                <span className={!open && `hidden`} origin-left duration-200>{menu.title}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='p-12 h-screen w-full'>
                {children}
            </div>
        </div>
    );
}

export default Layout;