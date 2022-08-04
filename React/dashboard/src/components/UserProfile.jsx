import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

import Logout from './Logout';



const UserProfile = () => {
  const { currentColor, handleClose, login, setLogin , profilePic, firstName, lastName, email} = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-52 sm:right-12 top-16 bg-white dark:bg-[#42464D] p-8 rounded-xl w-96 shadow-lg"
    style={{zIndex:1000000}}
    >
    <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <TooltipComponent content="Close" position="TopLeft">
              <button
                type="button"
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
                onClick={()=>handleClose()}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={profilePic ? profilePic : avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">  {`${firstName} ${lastName}`}</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {email} </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {/* <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          // onClick={setLogin(false)}
        /> */}
        <Logout/>
      </div>
    </div>

  );
};

export default UserProfile;