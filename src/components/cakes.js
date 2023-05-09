import fetcher from "../lib/fetcher";

export default function cakes() {
  const { data, isLoading, isError } = fetcher("api/cakes");

  console.log(data)
  return (
    <div class="bg-menuNavBar h-screen">
      {/* <!--NavBar--> */}
      <nav class="p-2">
        <div class="bg-navBarColor">
          {/* <!--Search,Cart,Message--> */}
          <div class="flex justify-between mx-auto">
            <div class="flex items-center pl-3">
              {/* <!-- CartMessageIcons --> */}

              <div class="flex h-36 w-36 gap-6 items-center">
                <a href="">
                  <img class="" src="/images/cart.png" />
                </a>
                <a href="">
                  <img class="" src="/images/message.png" />
                </a>
              </div>
            </div>

            {/* <!--Title Cakes--> */}
            <div class="order-2 flex flex-col text-center pt-3 pr-6 gap-5">
              <p class="font-bold text-5xl">CAKES</p>
              <div>
                <p class="italic text-2xl">
                  (NOTE: PRICE MAY VARY DEPENDING ON THE DESIGN)
                </p>
              </div>
            </div>

            {/* <!--Logo--> */}
            <div class="order-3 pr-3">
              <img
                class="h-36 w-36 rounded-full bg-white flex justify-center items-center"
                src="/images/BakeBitesLogo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Landing Body Page --> */}
      <div class="bg-white bg-pageBG bg-repeat p-6">
        <div class="grid grid-cols-3 place-content-evenly gap-5 ">
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
    <div class="flex flex-row">
      <img
        class="p-6 h-64 w-64 rounded-full border-4 border-menuNavBar bg-menuNavBar flex justify-center items-center"
        src={img || "/"}
        alt=""
      />
      <div class="p-6 flex flex-col justify-center items-center text-center gap-5">
        <p class="font-bold text-2xl text-slate-900">{name || "Unknown"}</p>
        <a href="#Modal">
          <img class="p-3 px-6 pt-2" src="/images/biteme.png" />
        </a>
      </div>
    </div>
  );
}
