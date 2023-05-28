import Link from "next/link";
import useFetcher  from "../lib/fetcher";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { RadioGroup } from "@headlessui/react";

export default function order() {
  let router = useRouter();
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");
  const [mode, setMode] = useState("Pickup");

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const time = current.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  var userSession;
  try {
    userSession = sessionStorage.getItem("state");
  } catch (error) {
    console.log(error);
  }

  const { data, isLoading, isError } = useFetcher(`api/carts/${userSession}`);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const calculateTotal = () => {
    let totalPrice = 0;

    data.forEach((product) => {
      const productType = product.productType;
      const productId = product.productId;
      const amount = product.amount;

      if (productType === "cake") {
        const {
          data: cakeData,
          isLoading: cakeLoading,
          isError: cakeError,
        } = useFetcher(`api/cakes/${productId}`);

        if (!cakeLoading && !cakeError && cakeData) {
          totalPrice += cakeData.price * amount;
        }
      } else if (productType === "cupcake") {
        const {
          data: cupcakeData,
          isLoading: cupcakeLoading,
          isError: cupcakeError,
        } = useFetcher(`api/cupcakes/${productId}`);

        if (!cupcakeLoading && !cupcakeError && cupcakeData) {
          totalPrice += cupcakeData.price * amount;
        }
      } else if (productType === "bakery") {
        const {
          data: bakeryData,
          isLoading: bakeryLoading,
          isError: bakeryError,
        } = useFetcher(`api/bakery/${productId}`);

        if (!bakeryLoading && !bakeryError && bakeryData) {
          totalPrice += bakeryData.price * amount;
        }
      }
    });

    return totalPrice;
  };

  const total = calculateTotal();

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const userSession = sessionStorage.getItem("state");

      const body = {
        name,
        contactNumber,
        date,
        time,
        location,
        mode,
        userSession,
        total,
      };

      await fetch(`api/add_order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await router.push("/thankyou");
      sessionStorage.setItem("state", uuidv4());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="order" className="bg-aboutUs h-screen">
      <nav className="p-3"></nav>

      <div className="bg-pageBG bg-white/90 h-5/6 flex justify-center">
        <div className="flex justify-center p-2 flex-col">
          {/* <!-- labas na border --> */}
          <div className="border-4 border-menuNavBar p-2 ">
            {/* <!-- inside border with content --> */}
            <div className="bg-hoursLocation/80 border-2 border-slate-950 p-6 flex flex-col">
              <div className="h-full w-full">
                <div className="border-x-slate-700 space-y-6">
                  <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                    <p className="text-2xl font-poppins text-outline text-white">
                      Ordered By:
                    </p>
                    <input
                      autoFocus
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      value={name}
                      placeholder="Full Name"
                      className="input input-bordered rounded-full"
                    />
                  </div>
                  <div className="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                  <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                    <p className="text-2xl font-poppins text-outline text-white">
                      Contact Number:
                    </p>
                    <input
                      autoFocus
                      onChange={(e) => setContactNumber(e.target.value)}
                      type="text"
                      value={contactNumber}
                      placeholder="+63xxxxxxxxxx"
                      className="input input-bordered rounded-full"
                    />
                  </div>
                  <div className="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                  <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                    <p className="text-2xl font-poppins text-outline text-white">
                      Date:
                    </p>
                    <p className="input input-bordered rounded-full font-poppins text-white">
                      {date}
                    </p>
                  </div>
                  <div className="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                  <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                    <p className="text-2xl font-poppins text-outline text-white">
                      Time:
                    </p>
                    <p className="input input-bordered rounded-full font-poppins  text-white">
                      {time}
                    </p>
                  </div>
                  <div className="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                  <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                    <p className="text-2xl font-poppins text-outline text-white">
                      Location:
                    </p>
                    <input
                      autoFocus
                      onChange={(e) => setLocation(e.target.value)}
                      type="text"
                      value={location}
                      placeholder="Full Address"
                      className="input input-bordered rounded-full"
                    />
                  </div>
                  <div className="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                  <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                    <p className="text-2xl font-poppins text-outline text-white">
                      Order/s:
                    </p>
                    {data?.map((value, index) => (
                      <Orders data={value} key={index}></Orders>
                    ))}
                  </div>
                  <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                    <p className="text-2xl font-poppins text-outline text-white">
                      Total Amount:
                    </p>
                    {total}
                  </div>
                  <div className="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>

                  <RadioGroup
                    className="flex justify-between gap-x-2 place-items-center px-2 text-xl"
                    value={mode}
                    onChange={setMode}
                  >
                    <RadioGroup.Label className="text-2xl font-poppins text-outline text-white">
                      Pickup/Delivery
                    </RadioGroup.Label>
                    <RadioGroup.Option
                      className="rounded-full bg-white p-2 font-poppins"
                      value="Pickup"
                    >
                      {({ checked }) => (
                        <div
                          className={checked ? "bg-blue-200 rounded-full" : ""}
                        >
                          Pickup
                        </div>
                      )}
                    </RadioGroup.Option>
                    <RadioGroup.Option
                      className="rounded-full bg-white p-2 font-poppins"
                      value="Delivery"
                    >
                      {({ checked }) => (
                        <div
                          className={checked ? "bg-blue-200 rounded-full" : ""}
                        >
                          Delivery
                        </div>
                      )}
                    </RadioGroup.Option>
                  </RadioGroup>

                  <div className="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                </div>
                <div className="py-3 flex items-center justify-center">
                  <div className="card bg-base-300 rounded-full place-items-center w-24 hover:bg-lime-300 font-poppins font-bold ">
                    <Link onClick={submitData} scrol={false} href="/thankyou">
                      Confirm
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="p-3"></nav>
    </div>
  );
}
function Orders({ data }) {
  const { productId, productType, amount } = data;

  if ("cake" == productType) {
    const { data, isLoading, isError } = useFetcher(`api/cakes/${productId}`);
    if (isError) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
      <>
        <p className="input input-bordered rounded-full font-poppins  text-white">
          {data.name} x{amount}
        </p>
      </>
    );
  } else if ("cupcake" == productType) {
    const { data, isLoading, isError } = useFetcher(`api/cupcakes/${productId}`);
    if (isError) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
      <>
        <p className="input input-bordered rounded-full font-poppins  text-white">
          {data.name} x{amount}
        </p>
      </>
    );
  } else if ("bakery" == productType) {
    const { data, isLoading, isError } = useFetcher(`api/bakery/${productId}`);
    if (isError) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
      <>
        <p className="input input-bordered rounded-full font-poppins  text-white">
          {data.name} x{amount}
        </p>
      </>
    );
  }
}
