import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function cartpage() {
  return (
    <div id="cartpage" className="space-y-4 p-6">
      <div className="bg-menuNavBar border-4 border-aboutUs flex justify-center items-center space-x-4">
        <h1 className="font-bebasNeue tracking-widest text-outline text-white text-5xl">YOUR</h1>
        <Image
          src={"/images/BakeBitesLogo.png"}
          width={150}
          height={150}
          fill={false}
          className="rounded-full"
        />
        <h1 className="font-bebasNeue tracking-widest text-outline text-white text-5xl">CAKE</h1>
      </div>

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
              src={`/images/cake1.jpg`}
              width={250}
              height={100}
              fill={false}
            />
            <p className="font-poppins text-xl font-bold">CakeName</p>
          </div>
          <div className="space-y-4">
            <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-3xl font-poppins text-outline">
              Size:{" "}
            </div>
            <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-xl font-poppins text-outline">
              Amount: 
              <Counter />
            </div>
            
          </div>
        </div>
      </div>
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

function Counter() {
  const [count, setCount] = useState(0);

  const inc = (event) => {
    console.log("btn", event.target);
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="custom-number-input h-10 w-32">
        <label
          for="custom-input-number"
          className="w-full text-gray-700 text-sm font-semibold"
        >
          
        </label>
        <div className="rounded-lg flex">
          <CounterBtn label={"-"} onClick={dec} />
          <CounterDisplay count={count} />
          <CounterBtn label={"+"} onClick={inc} />
        </div>
      </div>
    </>
  );
}
const CounterBtn = ({ label, onClick }) => {
  return (
    <div
      className="counter-btn bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 py-2 px-4 rounded-md cursor-pointer outline-none"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

const CounterDisplay = ({ count }) => {
  return <div className="py-2 px-4">{count}</div>;
};
