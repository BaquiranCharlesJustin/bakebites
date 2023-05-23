import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import fetcher from "../lib/fetcher";
import cupcake from "@/components/cupcake";

export default function cartpage() {
  const { data, isLoading, isError } = fetcher("api/carts");

  return (
    <div id="cartpage" className="space-y-4 p-6">
      <div className="bg-menuNavBar border-4 border-aboutUs flex justify-center items-center space-x-4">
        <h1 className="font-bebasNeue tracking-widest text-outline text-white text-5xl">
          YOUR
        </h1>
        <Image
          src={"/images/BakeBitesLogo.png"}
          width={150}
          height={150}
          fill={false}
          className="rounded-full"
        />
        <h1 className="font-bebasNeue tracking-widest text-outline text-white text-5xl">
          CAKE
        </h1>
      </div>

      {data?.map((value, index) => (
        <Cart data1={value} key={index}></Cart>
      ))}

      <div className="bg-menuNavBar border-4 border-aboutUs p-1 flex">
        <div className="bg-menuNavBar border-2 border-black py-2 px-4 flex justify-between grow">
          <div className="flex">
            <input
              type="checkbox"
              checked="checked"
              class="checkbox checkbox-lg"
            />
            <p className="text-3xl font-poppins text-outline">All</p>
          </div>
          <p className="text-3xl font-poppins text-outline">Total: Amount</p>
        </div>
        <div className="hover:bg-red-600 bg-darkBlue border-2 border-black py-2 px-4 flex justify-between text-2xl font-poppins text-outline">
          <Link href="#orderConfirm">Checkout</Link>
        </div>
      </div>
    </div>
  );
}

function Cart({ data1 }) {
  const { id, userSession, productId, amount, productType } = data1;
  const { data, isLoading, isError } = fetcher(`api/cakes/${productId}`);
  // const { cupcakeData, isLoading1, isError1 } = fetcher(`api/cupcakes/${productId}`);

  if (isError && isError1) return <div>failed to load</div>;
  // if (!cakeData && !cupcakeData) return <div>loading...</div>;

  // if(cakeData.name === productType){
  //   data = cakeData
  // }
  // if(cupcakeData.name === productType){
  //   data = cupcakeData
  // }
  if (sessionStorage.getItem("state") != userSession) {
    return;
  }

  return (
    <>
      <div className="bg-menuNavBar border-4 border-aboutUs">
        <div className="bg-menuNavBar border-2 border-black flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-8">
            <input
              type="checkbox"
              checked="checked"
              class="checkbox checkbox-lg"
            />
            <Image
              className="border-menuNavBar bg-menuNavBar rounded-full"
              src={`/images/cake${data.id}.jpg`}
              width={250}
              height={100}
              fill={false}
            />
            <p className="font-poppins text-xl font-bold">{data.name}</p>
          </div>
          <div className="space-y-4">
            <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-3xl font-poppins text-outline">
              Size: {data.size}
            </div>
            <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-xl font-poppins text-outline">
              Amount: {amount}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
