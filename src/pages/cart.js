import Image from "next/image";
import Link from "next/link";
import fetcher from "../lib/fetcher";
import { useEffect, useState } from "react";

export default function cartpage() {
  const { data, isLoading, isError } = fetcher("api/carts");
  if (isError) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

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
              className="checkbox checkbox-lg"
            />
            <p className="text-3xl font-poppins text-outline">All</p>
          </div>
          <p className="text-3xl font-poppins text-outline">
            Total:
            <Tots/>
          </p>
        </div>
        <div className="hover:bg-red-600 bg-darkBlue border-2 border-black py-2 px-4 flex justify-between text-2xl font-poppins text-outline">
          <Link scroll={false} href="/?order=1">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

function Cart({ data1 }) {
  const { id, userSession, productId, amount, productType } = data1;
  if (sessionStorage.getItem("state") != userSession) {
    return;
  }

  if ("cake" == productType) {
    const { data, isLoading, isError } = fetcher(`api/cakes/${productId}`);
    if (isError) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
      <>
        <div className="bg-menuNavBar border-4 border-aboutUs">
          <div className="bg-menuNavBar border-2 border-black flex justify-between items-center py-2 px-4">
            <div className="flex items-center gap-8">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-lg"
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
              <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-xl font-poppins text-outline">
                Price: {data.price}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (productType == "cupcake") {
    const { data, isLoading, isError } = fetcher(`api/cupcakes/${productId}`);
    if (isError) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
      <>
        <div className="bg-menuNavBar border-4 border-aboutUs">
          <div className="bg-menuNavBar border-2 border-black flex justify-between items-center py-2 px-4">
            <div className="flex items-center gap-8">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-lg"
              />
              <Image
                className="border-menuNavBar bg-menuNavBar rounded-full"
                src={`/images/cupcakes${data.id}.jpg`}
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
              <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-xl font-poppins text-outline">
                Price: {data.price}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (productType == "bakery") {
    const { data, isLoading, isError } = fetcher(`api/bakery/${productId}`);
    if (isError) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
      <>
        <div className="bg-menuNavBar border-4 border-aboutUs">
          <div className="bg-menuNavBar border-2 border-black flex justify-between items-center py-2 px-4">
            <div className="flex items-center gap-8">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-lg"
              />
              <Image
                className="border-menuNavBar bg-menuNavBar rounded-full"
                src={`/images/bakery${data.id}.jpg`}
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
              <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-xl font-poppins text-outline">
                Price: {data.price}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <></>;
}

function Tots() {
  const { data: cartData, isLoading: cartLoading, isError: cartError } = fetcher("api/carts");

  const calculateTotal = () => {
    let totalPrice = 0;

    cartData.forEach((product) => {
      const productType = product.productType;
      const productId = product.productId;
      const amount = product.amount;

      if (productType === "cake") {
        const { data: cakeData, isLoading: cakeLoading, isError: cakeError } = fetcher(
          `api/cakes/${productId}`
        );

        if (!cakeLoading && !cakeError && cakeData) {
          totalPrice += cakeData.price * amount;
        }
      } else if (productType === "cupcake") {
        const { data: cupcakeData, isLoading: cupcakeLoading, isError: cupcakeError } = fetcher(
          `api/cupcakes/${productId}`
        );

        if (!cupcakeLoading && !cupcakeError && cupcakeData) {
          totalPrice += cupcakeData.price * amount;
        }
      } else if (productType === "bakery") {
        const { data: bakeryData, isLoading: bakeryLoading, isError: bakeryError } = fetcher(
          `api/bakery/${productId}`
        );

        if (!bakeryLoading && !bakeryError && bakeryData) {
          totalPrice += bakeryData.price * amount;
        }
      }
    });

    return totalPrice;
  };

  if (cartError) return <div>Failed to load cart data</div>;
  if (cartLoading) return <div>Loading cart data...</div>;

  const total = calculateTotal();

  return <>{total}</>;
}
