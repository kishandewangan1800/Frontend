import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tooltip, TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";

import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFun, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFun}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    handleClick,
    setActiveMenu,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
  } = useStateContext();

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        color="blue"
        icon={<AiOutlineMenu />}
        customFun={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          color="blue"
          icon={<FiShoppingCart />}
          customFun={() => handleClick("cart")}
        />

        <NavButton
          title="Chat"
          color="blue"
          icon={<BsChatLeft />}
          customFun={() => handleClick("chat")}
          dotColor="#03c9d7"
        />
        <NavButton
          title="Notification"
          color="blue"
          icon={<RiNotification3Line />}
          customFun={() => handleClick("notification")}
          dotColor="#03c9d7"
        />
        <TooltipComponent content="profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="Avatar" className="rounded-full w-8 h-8 " />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Kishan
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
