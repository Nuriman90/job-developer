import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import FormData from '../pages/form/FormData';
import Job from '../pages/job/Job';
import JobDetail from '../pages/job/JobDetail';
import Landing from '../pages/landing/Landing'
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Password from '../pages/password/Password';
import TableData from '../pages/table/TableData';
import Cookies from 'js-cookie';
import UpDown from '../components/UpDown';
import Dashboard from '../pages/dashboard/Dashboard';
import NotFound from '../components/NotFound';
import { GlobalProvider } from '../context/GlobalContext';
import ForgotPassword from '../pages/forgotpassword/ForgotPassword';

const Router = () => {

    const token = Cookies.get("token");

    const landingPages = () => (
        <Layout>
            <Routes>
                <Route exact path='/dashboard' element={<Dashboard />} />
                <Route exact path='/table-data' element={<TableData />} />
                <Route exact path='/create' element={<FormData />} />
                <Route exact path='/edit/:IdData' element={<FormData />} />
                <Route exact path='/change-password' element={<Password />} />
            </Routes>
        </Layout>
    )
    // console.log(Cookies.get("token"));
    return (
        <BrowserRouter>
            <GlobalProvider>
                {token ? landingPages() :
                    <UpDown>
                        <Routes>
                            <Route exact path='/' element={<Landing />} />
                            <Route exact path='/login' element={<Login />} />
                            <Route exact path='/register' element={<Register />} />
                            <Route exact path='/job-vacancy' element={<Job />} />
                            <Route exact path='/job-detail/:slug' element={<JobDetail />} />
                            <Route exact path='/forgot-password' element={<ForgotPassword />} />
                            <Route exact path='/*' element={<NotFound />} />
                        </Routes>
                    </UpDown>
                }
            </GlobalProvider>
        </BrowserRouter>
    )
}

export default Router