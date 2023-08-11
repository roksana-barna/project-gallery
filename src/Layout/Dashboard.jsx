import React from 'react';
import useAdmin from '../Components/Hooks/useAdmin';
import { NavLink, Outlet } from 'react-router-dom';
import {  FaHome, FaPeopleArrows,FaOdnoklassniki,FaDesktop} from 'react-icons/fa';


const Dashboard = () => {
    const [isAdmin] = useAdmin();

    return (
        <div>
              <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-orange-200">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 h-full bg-orange-200 text-base-content">
                        {
                            isAdmin &&
                            <>
                                <li><NavLink className='bg-red-400 text-center text-white'>Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/manageclass' className='text-cyan-800 text-lg  bg-transparent hover:bg-red-400'><FaDesktop></FaDesktop>Manage Classes</NavLink></li>
                                <li><NavLink to='/dashboard/manageuser' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400 '><FaOdnoklassniki></FaOdnoklassniki>Manage Users</NavLink></li>
                            </>

                        }
                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/classespage"><FaPeopleArrows></FaPeopleArrows>Classes</NavLink></li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;