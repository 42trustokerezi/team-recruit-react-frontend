import React from "react";
import mastercard from "../assets/mastercard.svg"
import grid from "../assets/grid.svg"
import Ticket from "./Ticket";
import edit from "../assets/edit.png";

const Payout = () => {
  return (
    <div className="main-container lg:grid grid-cols-5 gap-20 w-4/5 mx-auto lg:absolute left-[10%] top-[30%] bg-white">
      <div className="col-span-3">
        {/**left */}
        <div className="head flex justify-between mb-12 mt-16">
          <div className="logo">
            <div className=""></div>
            <h1 className="text-[#03045e] text-lg"><strong >AceCoin</strong>Pay</h1>
          </div>

          <div className="timer flex">
            <p className="px-2 py-1 bg-slate-900 text-white mr-0.5 rounded-sm">
              0
            </p>
            <p className="px-2 py-1 bg-slate-900 text-white mr-0.5 rounded-sm">
              1
            </p>
            <p className=" mr-0.5">:</p>
            <p className="px-2 py-1 bg-slate-900 text-white mr-0.5 rounded-sm">
              1
            </p>
            <p className="px-2 py-1 bg-slate-900 text-white mr-0.5 rounded-sm">
              9
            </p>
          </div>
        </div>

        <form>
          <div className="card-no mb-6">
            <div className="flex justify-between mb-4">
              <div>
                <h2 className="text-medium text-[#03045e] font-semibold mb-0.5">
                  Card Number
                </h2>
                <p className="text-xs font-light">
                  Enter the 16-digit card number on the card
                </p>
              </div>
              <div className="edit flex">
              <div className="w-4 h-4">
                <img src={edit} className="w-full h-full" alt="edit"/>
              </div>
                <p className="text-sm font-semibold text-blue-600">Edit</p>
              </div>
            </div>
            <div className="card-input flex  py-2 rounded-md border  hover:outline-blue-500">
              <div className="w-6 h-6 mr-6 ml-3">
                <img
                  src={mastercard}
                  alt="mastercard"
                  className="w-full h-full"
                />
              </div>
              <input
                className="w-full text-sm focus:outline-none"
                type="text"
                placeholder="2412  -  7512  -  3412  -  3456"
              />
              
            </div>
          </div>
          <div className="cvv-no lg:grid grid-cols-2 gap-4 mb-6">
            <div className="mb-4">
              <h2 className="text-medium text-[#03045e] font-medium">CVV Number</h2>
              <p className="text-xs text-gray-500">
                Enter the 3 or 4 digit number on the card
              </p>
            </div>
            <div className="border py-2 rounded-md flex justify-between">
              <input
                className="text-center w-64 text-sm"
                type="text"
                placeholder="327"
              />
              <div className="w-4 h-4 mr-3 mt-1">
                <img src={grid} alt="grid" />
              </div>
            </div>
          </div>
          <div className="expiry grid grid-cols-2 gap-4 mb-6">
            <div className="mb-4">
              <h2 className="text-md text-[#03045e] font-medium">Expiry Date</h2>
              <p className="text-xs text-gray-500">
                Enter the expiration date of the card
              </p>
            </div>
            <div className="grid grid-cols-2  gap-4">
              <input
                className="border text-center col-span-1 rounded-md text-sm "
                type="text"
                placeholder="09"
              />

              <input
                className="border text-center col-span-1 rounded-md text-sm"
                type="text"
                placeholder="22"
              />
            </div>
          </div>
          <div className="password lg:grid grid-cols-2 gap-4 mb-8">
            <div className="mb-4">
              <h2 className="text-md text-[#03045e] font-medium">Password</h2>
              <p className="text-xs text-gray-500">
                Enter your Dynamic password
              </p>
            </div>
            <div className="border flex justify-between text-center py-2 rounded-md">
              <input type="password" />
              <div className="w-4 h-4 mr-3 lg:mt-3 mt-1 text-sm">
                <img src={grid} alt="grid" />
              </div>
            </div>
          </div>

          <button className="w-full py-4 bg-blue-700 text-white rounded-md font-medium text-sm">
            Pay Now
          </button>
        </form>
      </div>
      <div className="w-full h-full  col-span-2 mt-52 lg:mt-16">
          <Ticket />
        {/**right */}

      </div>
    </div>
  );
};

export default Payout;
