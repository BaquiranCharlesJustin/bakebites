import fetcher from "../lib/fetcher";

export default function cakes() {
  const { data, isLoading, isError } = fetcher("api/cakes");

  return (
    <div id="cakes" className="bg-menuNavBar h-screen">
      {/* <!--NavBar--> */}
      <nav className="p-2">
        <div className="bg-navBarColor">
          {/* <!--Search,Cart,Message--> */}
          <div className="flex justify-between mx-auto">
            <div className="flex items-center pl-3">
              {/* <!-- CartMessageIcons --> */}

              <div className="flex h-36 w-36 gap-6 items-center">
                <a href="">
                  <img className="" src="/images/cart.png" />
                </a>
                <a href="">
                  <img className="" src="/images/message.png" />
                </a>
              </div>
            </div>

            {/* <!--Title Cakes--> */}
            <div className="order-2 flex flex-col text-center pt-3 pr-6 gap-5">
              <p className="font-bold text-5xl">CAKES</p>
              <div>
                <p className="italic text-2xl">
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
        <div className="grid grid-cols-3 place-content-evenly gap-5 ">
          {/* <!-- CarrotCake --> */}
          {data?.map((value, index) => (
            <Cake data={value} key={index}></Cake>
          ))}
        </div>
      </div>
    </div>
  );
}

function Cake({ data }) {
  const { id, name, img } = data;
  return (
    <div className="flex flex-row">
      <img
        className="p-6 h-64 w-64 rounded-full border-4 border-menuNavBar bg-menuNavBar flex justify-center items-center"
        src={img || "/"}
        alt=""
      />
      <div className="p-6 flex flex-col justify-center items-center text-center gap-5">
        <p className="font-bold text-2xl text-slate-900">{name || "Unknown"}</p>
        {/* <!--modal trigger --> */}
        <div>
          <label for="tw-modal" className="cursor-pointer">
            <img className="p-3 px-6 pt-2" src="/images/biteme.png" />
          </label>
        </div>
        {/* <!-- hidden toggle --> */}
        <input
          type="checkbox"
          id="tw-modal"
          className="peer fixed appearance-none opacity-8"
        />
        {/* <!-- modal --> */}
        <label
          for="tw-modal"
          className="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100"
        >
          {/* <!-- modal-box --> */}
          <label
            className="max-h-[calc(100vh overscroll-contain rounded-md 5em)] h-fit-max-w-lg scale-90 overflow-y-auto bg-white p-6 Otext-black shadow-2xl transition"
            for=""
          >
            <div className="card w-[450px] h-[450px] bg-pageBG bg-aboutUs border-4 border-navBarColor p-4 rounded-xl shadow-xl flex flex-col justify-between ">
              <div className="flex flex-row rounded-xl ">
                <img
                  className="p-6 h-64 w-64 rounded-full border-4 border-menuNavBar bg-menuNavBar flex justify-center items-center"
                  src={img || "/"}
                  alt=""
                />
                <div className="font-bold flex flex-col items-center justify-center pl-3">
                  <p>{name || "/"}</p>
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
          </label>
        </label>
      </div>
    </div>
  );
}
