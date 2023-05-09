import React from "react";

export default function MyModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div id="Popup" className="bg-aboutUs h-screen">
        <nav className="p-3"></nav>
        <div className="bg-pageBG bg-gray-500 h-5/6 flex justify-center items-center">
          <div className="card w-[450px] h-[450px] bg-pageBG bg-aboutUs border-4 border-navBarColor p-4 rounded-xl shadow-xl flex flex-col justify-between ">
            <div className="flex flex-row rounded-xl ">
              <img
                className="p-6 h-64 w-64 rounded-full border-4 border-menuNavBar bg-menuNavBar flex justify-center items-center"
                src="/images/cake1.jpg"
                alt=""
              />
              <div className="font-bold flex flex-col items-center justify-center pl-3">
                <p>Carrot Cake</p>
                <p>Available Size:</p>
                <p className="bg-slate-800 rounded-full px-2 text-orange-300">
                  6 Inches
                </p>
                <div className="flex flex-row">
                  <div className="flex justify-center items-center p-3">
                    <button className="btn text-xl rounded-sm bg-slate-800 px-3 text-center">
                      -
                    </button>
                    <p className="text-bold text-3xl px-3 text-center">1</p>
                    <button className="btn text-xl rounded-sm bg-slate-800 px-3 text-center">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card-actions grid grid-cols-3 gap-2">
                {/* <!-- Chat now Button --> */}
                <div className="flex justify-center items-center flex-row bg-button1/70 rounded-full px-2">
                  <a href="">
                    <img className="w-4 h-4" src="/images/cart.png" />
                  </a>
                  <button className="btn btn-primary text-center  text-lg pl-3">
                    Chat Now
                  </button>
                </div>
                {/* <!-- Add to Cart Button --> */}
                <div className="flex justify-center items-center flex-row bg-menuNavBar rounded-full px-2">
                  <a href="">
                    <img className="w-6 h-6" src="/images/cart.png" />
                  </a>
                  <button className="btn btn-primary text-center text-lg  pl-3">
                    Add to Cart
                  </button>
                </div>
                <button className="btn btn-primary bg-button1/70 rounded-full text-lg px-2">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav className="p-3"></nav>
      </div>
    </div>
  );
}
