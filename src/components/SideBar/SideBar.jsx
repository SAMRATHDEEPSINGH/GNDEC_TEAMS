
import { useState,useEffect } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";



function SideBar() {
  const [loading, setLoading] = useState(true);

  const handleLinkClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    // Simulate loading time when component mounts
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [open, setOpen] = useState(false);
  const [power, setpower] = useState(true);
  // const navigate=useNavigate();
  const Menus = [
    { title: "Rooms", src: "Chat", gap: true, to: "/" },
    { title: "Edit", src: "edit", to: "/editUser" },
    { title: "About Us", src: "about", to: "/about" },
    { title: "LogOut", src: "logout", gap: true, to: "logout" },

  ]

  return (
    <div className='flex'>
      <div className={`${open ? 'w-72' : 'w-20'} h-screen p-2 pt-8 bg-purple-700 relative duration-300 `}>
        <img src="./src/assets/control.png" className={`absolute cursor-pointer rounded-full
        -right-3 top-9 w-7 border-2 border-gray-500 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} />
        <div className='flex gap-x-4 items-center'>
          <img src="./src/assets/02.png" className={`cursor-pointer duration-500 rounded-full ${open && "rotate-[360deg]"}`} alt="" />
          <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>Gndec Teams</h1>
        </div>
        <div className='flex gap-x-4 items-center'>
          <img src={`./src/assets/${power === true ? 'admin' : 'user'}.png`} className={`cursor-pointer duration-500 rounded-full ${open && "rotate-[360deg]"}`} alt="" />
          <h1 className={`text-2w text-white font-bold p-4 py-3 ${!open && "scale-0"}`}>{power === true ? "Admin" : "User"} Dashboard</h1>
        </div>
        <ul className='pt-6'>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} `}
            >
              <Link to={Menu.to}
              onClick={handleLinkClick}>
                <img src={`./src/assets/${Menu.src}.png`} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}</span></Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='p-0 text-1xl font-semibold flex-1 h-screen'>
        {
          loading ?
          <div className='flex justify-center items-center h-screen'>
            <ClimbingBoxLoader
              color={"#8c3eda"}
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            </div>
            :
            <Outlet />
        }
      </div>
    </div>
  )
}

export default SideBar
