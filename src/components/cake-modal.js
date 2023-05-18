import fetcher from "../lib/fetcher";
import { useState } from "react";

export default function CakeModal({ cakeId }) {
  const { data, isLoading, isError } = fetcher(`api/cakes/${cakeId}`);
  return (
    <>
      <Modal {...data}></Modal>
    </>
  );
}

function Modal({ id, title }) {
  return (
    <>
      <div className="flex flex-row rounded-xl ">
        <img
          className="p-6 h-64 w-64 rounded-full border-4 border-menuNavBar bg-menuNavBar flex justify-center items-center"
          src={`/images/cake${id}.jpg`}
          alt=""
        />
        <div className="font-bold flex flex-col items-center justify-center pl-3">
          <p>{title || "Unknown"}</p>
          <p>Available Size:</p>
          <p className="bg-slate-800 rounded-full px-2 text-orange-300">
            6 Inches
          </p>
          <div className="flex flex-row">
            <Counter></Counter>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="card-actions grid grid-cols-2 gap-2">
          {/* <!-- Add to Cart Button --> */}
          <button className="bg-menuNavBar rounded-full px-2 gap-6 flex btn btn-primary text-center text-lg pl-3">
            <img className="w-6 h-6" src="/images/cart.png" />
            Add to Cart
          </button>
          <button className="btn btn-primary bg-button1/70 rounded-full text-lg px-2">
            Buy now
          </button>
        </div>
      </div>
    </>
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
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 gap-3">
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