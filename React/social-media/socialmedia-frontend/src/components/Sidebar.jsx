import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiHomeFill}  from 'react-icons/ri'
import {ioIosArrowForward} from 'react-icons/io';
import logo from '../assets/logo.png';

const isNotActiveStyle = 'flex items-center px-5 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
const isActiveStyle = 'flex items-center px-5 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize'

const categories = [
  {name: 'Car'},
  {name: 'Animal'},
  {name: 'Wallpaper'},
  {name: 'Nature'},
  {name: 'Gaming'},
  {name: 'Coding'},
  {name: 'Painting'},
  {name: 'Other'}
]


const Sidebar = ({ user, closeToggle, }) => {

  const handleCloseSlidebar = () =>{
    if(closeToggle) closeToggle(false)
  }

  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar'>
      <div className="flex flex-col">
        <Link
        to='/'
        className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
        onClick={handleCloseSlidebar}
        >
        <img src={logo} alt="logo" className='w-full' />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
          to='/'
          className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
          onClick={handleCloseSlidebar}
          >
            <RiHomeFill /> &nbsp; Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl"> Discover Categories</h3>
          {
            categories.slice(0, categories.length -1).map((category) =>(
              <NavLink
              to={`/category/${category.name}`}
              className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
              onClick={handleCloseSlidebar}
              key={category.name}
              >
                {category.name}
              </NavLink>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar