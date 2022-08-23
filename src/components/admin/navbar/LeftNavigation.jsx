import React, {useEffect, useState} from "react";
import {Col, Image} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Logo from "../../../assets/images/logo/logo.png"
import {FiUsers} from "react-icons/fi";
import { MdDashboard, MdOutlinePayments,MdReport } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

function LeftNavigation() {

    const location = useLocation();
    const [url, setURL] = useState('');

    useEffect(() => {
        setURL(location.pathname);
    }, [location]);

    const navigate = useNavigate();

    const handleOnLogoClick = () => {
        navigate('/admin/dashboard');
    }

    return (
        <Col className='left-navigation p-1'>
            <div className='h-100'>
            <div className='px-lg-4 pt-lg-5 w-100 d-flex justify-content-center'>
                <Image src={Logo} className='logo bg-transparent' alt='LOGO' onClick={handleOnLogoClick}/>
            </div>
            <div className=' d-flex align-items-center h-75'>
                <ul className='list-unstyled px-2 nav-list bg-transparent w-100'>
                    <Link to='/admin/dashboard' className={url === '/admin/dashboard' ? 'active mb-2' : 'mb-2'}>
                        <li className='px-lg-3 bg-transparent d-flex align-items-center'>
                            <MdDashboard className='bg-transparent me-3'/>
                            Dashboard
                        </li>
                    </Link>
                    <Link to='/admin/occupants' className={url === '/admin/occupants' ? 'active mb-2' : 'mb-2'}>
                        <li className='px-lg-3 bg-transparent d-flex align-items-center'>
                            <FiUsers className='bg-transparent me-3'/>
                            Occupants
                        </li>
                    </Link>
                    <Link to='/admin/renters' className={url === '/admin/renters' ? 'active mb-2' : 'mb-2'}>
                        <li className='px-lg-3 bg-transparent d-flex align-items-center'>
                            <FaHouseUser className='bg-transparent me-3'/>
                            Renters
                        </li>
                    </Link>
                    <Link to='/admin/payment' className={url === '/admin/payment' ? 'active mb-2' : 'mb-2'}>
                        <li className='px-lg-3 bg-transparent d-flex align-items-center'>
                            <MdOutlinePayments className='bg-transparent me-3'/>
                            Payment
                        </li>
                    </Link>
                    <Link to='/admin/places' className={url === '/admin/places' ? 'active mb-2' : 'mb-2'}>
                        <li className='px-lg-3 bg-transparent d-flex align-items-center'>
                            <FaHome className='bg-transparent me-3'/>
                            Places
                        </li>
                    </Link>
                    <Link to='/admin/complains' className={url === '/admin/complains' ? 'active mb-2' : 'mb-2'}>
                        <li className='px-lg-3 bg-transparent d-flex align-items-center'>
                            <MdReport className='bg-transparent me-3'/>
                            Complains
                        </li>
                    </Link>
                </ul>
            </div>
            </div>
        </Col>
    );
}

export default LeftNavigation;
