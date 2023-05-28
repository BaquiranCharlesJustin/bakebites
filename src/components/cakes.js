import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useFetcher from "../lib/fetcher";
import CakeModal from "./cake-modal";
import Modal from "./ProductModal";
import Cart from "../pages/cart";
import Order from "../pages/order";
import SuccessAddCart from "../pages/successCart";

export default function Cakes() {
  const router = useRouter();
  
  const { data, isLoading, isError } = useFetcher("api/cakes");

  const handleCartClick = (event) => {
    event.preventDefault();
    router.push("/?cart=1", undefined, { scroll: false });
  };

  const handleCakeClick = (cakeId) => {
    router.push(`/?cakes=${cakeId}`, undefined, { scroll: false });
  };

  if (isLoading) {
    return <p>Loading cakes...</p>;
  }

  if (isError) {
    return <p>Error loading cakes. Please try again later.</p>;
  }

  return (
    <div id="cakes" className="bg-menuNavBar">
      {router.query.cakes && (
        <Modal
          onClose={() => {
            router.push({ pathname: router.pathname }, undefined, {
              scroll: false,
            });
          }}
        >
          <CakeModal cakeId={router.query.cakes} />
        </Modal>
      )}
      {router.query.cart && (
        <Modal
          onClose={() => {
            router.push({ pathname: router.pathname }, undefined, {
              scroll: false,
            });
          }}
        >
          <Cart />
        </Modal>
      )}
      {router.query.order && (
        <Modal
          onClose={() => {
            router.push({ pathname: router.pathname }, undefined, {
              scroll: false,
            });
          }}
        >
          <Order />
        </Modal>
      )}
      {router.query.successCart && (
        <Modal
          onClose={() => {
            router.push({ pathname: router.pathname }, undefined, {
              scroll: false,
            });
          }}
        >
          <SuccessAddCart />
        </Modal>
      )}
      {/* <!--NavBar--> */}
      <nav className="p-2">
        <div className="bg-navBarColor">
          {/* <!--Search,Cart,Message--> */}
          <div className="flex justify-between mx-auto">
            <div className="flex items-center pl-3">
              {/* <!-- CartMessageIcons --> */}
              <div className="flex h-36 w-36 gap-6 items-center">
                <button onClick={handleCartClick}>
                  <img className="" src="/images/cart.png" />
                </button>
              </div>
            </div>
            {/* <!--Title Cakes--> */}
            <div className="order-2 flex flex-col text-center pt-3 pr-6 gap-5">
              <p className="text-6xl font-bebasNeue tracking-widest text-weirdPinkColor text-outline">
                CAKES
              </p>
              <div>
                <p className="italic text-2xl text-outline font-poppins">
                  (NOTE: PRICE MAY VARY DEPENDING ON THE DESIGN)
                </p>
              </div>
            </div>
            {/* <!--Logo--> */}
            <div className="order-3 pr-3">
              <img
                className="h-36 w-36 rounded-full bg-white flex justify-center items-center"
                src="/images/BakeBitesLogo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Landing Body Page --> */}
      <div className="bg-white bg-pageBG bg-repeat p-6">
        <div className="grid grid-cols-3 place-content-evenly gap-5">
          {/* <!-- CarrotCake --> */}
          {data &&
            data.map((value, index) => (
              <Cake
                data={value}
                key={index}
                onClick={() => handleCakeClick(value.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

function Cake({ data, onClick }) {
  const { id, name } = data;

  return (
    <div className="flex flex-row">
      <img
        className="p-6 h-64 w-64 rounded-full border-4 border-menuNavBar bg-menuNavBar flex justify-center items-center"
        src={`/images/cake${id}.jpg`}
        alt=""
      />
      <div className="p-6 flex flex-col justify-center items-center text-center gap-5">
        <p className="font-bold text-2xl text-slate-900">{name || "Unknown"}</p>
        <button className="p-3 px-6 pt-2" onClick={onClick}>
          <img src="/images/biteme.png" />
        </button>
      </div>
    </div>
  );
}
