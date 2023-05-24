import Link from "next/link";
import fetcher from "../lib/fetcher";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function order() {
  let router = useRouter();
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");

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

  const { data, isLoading, isError } = fetcher(`api/carts/${userSession}`);
  if (isError) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const cake = [];
  const cupcake = [];
  const bakery = [];

  data.map((props) => {
    if ("cake" == props.productType) {
      cake.push(props.productId);
      console.log(cake);
    } else if ("cupcake" == props.productType) {
      cupcake.push(props.productId);
    } else if ("bakery" == props.productType) {
      bakery.push(props.productId);
    }
  });

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const userSession = sessionStorage.getItem("state");
      const mode = "pickup";
      const body = {
        name,
        contactNumber,
        date,
        time,
        location,
        cake,
        cupcake,
        bakery,
        mode,
        userSession,
      };

      await fetch(`api/add_order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await router.push("/thankyou");
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
                  <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
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
                  <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                  <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                    <p className="text-2xl font-poppins text-outline text-white">
                      Date:
                    </p>
                    <p className="input input-bordered rounded-full font-poppins text-white">
                      {date}
                    </p>
                  </div>
                  <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                  <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                    <p className="text-2xl font-poppins text-outline text-white">
                      Time:
                    </p>
                    <p className="input input-bordered rounded-full font-poppins  text-white">
                      {time}
                    </p>
                  </div>
                  <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
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
                  <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                  <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                    <p className="text-2xl font-poppins text-outline text-white">
                      Order/s:
                    </p>
                    {data?.map((value, index) => (
                      <Orders data={value} key={index}></Orders>
                    ))}
                  </div>
                  <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                  <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                    <p className="text-2xl font-poppins text-outline text-white">
                      Pickup/Delivery:
                    </p>
                    <div className="flex flex-row gap-x-3">
                      <p className="rounded-full bg-white p-2 font-poppins">
                        Pickup
                      </p>
                      <p className="rounded-full bg-white p-2 font-poppins">
                        Delivery
                      </p>
                    </div>
                  </div>
                  <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
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
    const { data, isLoading, isError } = fetcher(`api/cakes/${productId}`);
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
    const { data, isLoading, isError } = fetcher(`api/cupcakes/${productId}`);
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
    const { data, isLoading, isError } = fetcher(`api/bakery/${productId}`);
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
