import React from "react";
import "./ticket.css";
import mastercard from "../assets/mastercard.svg"
import chip from "../assets/chip.png"
import wifi from "../assets/wifi.png"
import dot from "../assets/dot.png"

const Ticket = () => {
  return (
    <div className="ticket-main lg:relative lg:left-[10%] h-full">
        <div className="w-1/5 lg:-top-1 lg:left-[30%] lg:absolute bg-blue-500 absolute top-[34.5rem] left-[40%] rounded-md">&nbsp;</div>
      <div className="grid grid-rows-5 w-4/5 mx-auto bg-[#e1e5ee] rounded-lg lg:absolute bottom-0">
        <div className="row-span-2">&nbsp;</div>
        <div className="row-span-2 ticket-border mt-12">
          <div className="w-4/5 mx-auto mb-6">
            <ul className="text-xs">
              <li className="flex justify-between mb-2">
                <p className="text-gray-500">Company</p>
                <p className="font-medium">Apple</p>
              </li>
              <li className="flex justify-between mb-2">
                <p className="text-gray-500">Order Number</p>
                <p className="font-medium">1266201</p>
              </li>
              <li className="flex justify-between mb-2">
                <p className="text-gray-500">Product</p>
                <p className="font-medium">Mackbook Air</p>
              </li>
              <li className="flex justify-between mb-2">
                <p className="text-gray-500">VAT (20%)</p>
                <p className="font-medium">$100.00</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row-span-1">
          <div className="w-4/5 mx-auto mt-3">
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-1">You have to Pay</p>
              <h2>
                <span className="text-base font-semibold">549.</span>{" "}
                <span className="text-xs font-medium">99</span>
                <span className="text-sm text-gray-500"> USD</span>
              </h2>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className=" w-3/5 mx-auto h-[14rem] info px-6 lg:absolute lg:left-[10%] absolute lg:top-[0.5rem] top-[35rem] left-[20%]">&nbsp;
        <div className="flex justify-between">
            <div className="w-10 h-10 ">
                <img src={chip} className="w-full h-full" alt="chip"/>
            </div>
            <div className="w-8 h-8">
                <img src={wifi} className="w-full h-full" alt="wifi"/>
            </div>
        </div>
        <div className="mt-10">
            <p className="text-xs font-medium mb-4">Jonathan Michael</p>
            <div className="flex items-center">
            <div className="w-2 h-2">
                <img src={dot} alt="dot"/>
            </div>
            <div className="w-2 h-2">
                <img src={dot} alt="dot"/>
            </div>
            <div className="w-2 h-2">
                <img src={dot} alt="dot"/>
            </div>
            <p className="text-xs font-semibold">3456</p></div>
        </div>
        <div className="flex justify-between mt-6 items-center">
            <p className="text-xs font-semibold">09/22</p>
            <div className="w-8 h-8">
            <img src={mastercard} alt="mastercard" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
