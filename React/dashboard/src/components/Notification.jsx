import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Button } from ".";
import { notificationData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Notification = () => {
  const { currentColor, handleClose } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-52 sm:right-12 top-16 bg-white dark:bg-[#42464D] p-8 rounded-xl w-96 shadow-lg"
    style={{zIndex:100000}}
    >
    <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">
            Notifications
          </p>
          <button
            type="button"
            className="text-white text-xs rounded p-1 px-2 bg-orange-theme "
          >
            {" "}
            5 New
          </button>
        </div>
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
      <div className="mt-5 ">
        {notificationData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center leading-8 gap-5 border-b-1 border-color p-3 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          >
            <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
