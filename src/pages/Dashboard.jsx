import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={(e) => navigate("/")}
            className="max-sw:w-32 cursor-pointer"
            src={assets.logo}
            alt="logo"
          />
          <div className="flex items-center gap-4">
            <p className="max-sm:hidden">Welcome, GreatStack</p>
            <div className="relative group cursor-pointer">
              <img
                className="w-8 border rounded-full"
                src={assets.company_icon}
                alt="dashboard icon"
              />
              <div className="absolute bg-gray-50 text-black right-0 top-10 z-10 shadow-lg rounded hidden group-hover:block pt-2 pb-2 px-2">
                <ul className="list-none m-0 p-0 rounded-md text-sm">
                  <li className="py-2 px-4 cursor-pointer hover:bg-gray-100 rounded">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-64 bg-gray-50 h-screen pt-8">
            <ul className="list-none m-0 p-0 flex flex-col gap-4">
                <li>
                <NavLink className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : '' }`}
                    to={"/dashboard/add-job"}   >             
                    <img src={assets.add_icon} alt="add job icon" className="inline mr-2"/>
                    Add Job
                </NavLink>
                </li>
                <li>
                <NavLink className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : '' }`}
                    to={"/dashboard/manage-job"}
                >
                    <img src={assets.home_icon} alt="manage job icon" className="inline mr-2"/>
                    Manage Jobs
                </NavLink>
                </li>
                <li>
                <NavLink className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : '' }`}
                    to={"/dashboard/view-application"}
                >
                    <img src={assets.person_tick_icon} alt="view application icon" className="inline mr-2"/>
                    View Applications
                </NavLink>
                </li>
            </ul>
        </div>

        <div className="flex-1 p-8">
            <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
