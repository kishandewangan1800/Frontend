import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Button } from '.';
import { cartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { currentColor, handleClose } = useStateContext();

  return (
    <div className="nav-item absolute  right-5 md:right-52 sm:right-12 top-16 bg-white dark:bg-[#42464D] p-8 rounded-xl w-96 shadow-lg"
    style={{zIndex:100000}}
    >
    <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button type="button" className="text-white  text-xs rounded p-1 px-2 bg-orange">
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
        {cartData?.map((item, index) => (
          <div key={index} className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer hover:bg-light-gray  dark:hover:bg-[#42464D]">
            <div className="relative">
              <img
                className="rounded-full h-10 w-10"
                src={item.image}
                alt={item.name}
              />
              <span
                style={{ background: item.dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.name}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{item.category}</p>
              <p className="text-green-500 font-semibold dark:text-gray-400 text-lg">{item.price}</p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See All items"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;