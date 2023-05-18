import Image from "next/image";
import { useState } from "react";

export default function cartpage() {
  return (
    <div id="cartpage" className="space-y-4 p-6">
      <div className="bg-menuNavBar border-4 border-aboutUs flex justify-center items-center space-x-4">
        <h1>your</h1>
        <Image
          src={"/images/BakeBitesLogo.png"}
          width={150}
          height={150}
          fill={false}
          className="rounded-full"
        />
        <h1>cake</h1>
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
            <p>CakeName</p>
          </div>
          <div className="space-y-4">
            <div className="bg-menuNavBar border-2 border-black py-2 px-4">
              Size:{" "}
            </div>
            <div className="bg-menuNavBar border-2 border-black py-2 px-4">
              Amount
            </div>
            <Counter />
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
            <p>All</p>
          </div>
          <p>Total: Amount</p>
        </div>
        <div className="hover:bg-red-600 bg-menuNavBar border-2 border-black py-2 px-4 flex justify-between">
          Checkout
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
          Counter Input
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
