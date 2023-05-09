export default function homepage() {
  return (
    <div className="bg-aboutUs h-screen">
      {/* <!--NavBar--> */}
      <nav className="p-6">
        <div className="border-4 border-slate-950">
          <div className="bg-navBarColor flex justify-around">
            {/* <!--Logo--> */}
            <div className="p-2">
              <img
                className="h-36 w-36 rounded-full bg-white flex justify-center items-center"
                src="/images/BakeBitesLogo.png"
                alt=""
              />
            </div>

            {/* <!--Title--> */}
            <div className="flex flex-col justify-center text-center">
              <h1>GOODNESS BAKED IN.</h1>
              <h2>Ibayo, Pinaod, San Ildelfonso, Bulacan, Philippines</h2>
            </div>

            {/* <!--Menu Items--> */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="rounded-md text-xl font-bold text-darkBlue bg-aboutUs"
              >
                About
              </a>
              <a
                href="#"
                className="rounded-md text-xl font-bold text-darkBlue bg-aboutUs"
              >
                Menu
              </a>
              <a
                href="#"
                className="rounded-md text-xl font-bold text-darkBlue bg-aboutUs"
              >
                Location
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Landing Body Page --> */}
      <div className="bg-white bg-pageBG bg-repeat p-6">
        <div className="bg-no-repeat bg-center flex justify-center items-center h-[640px] w-full bg-landingBG p-6">
          <div className="bg-orderNow/50 h-60 w-[700px] flex flex-col justify-around">
            <h1 className="text-6xl text-center text-white font-bold outline-4 outline-black">
              ORDER FOR PICKUP OR DELIVERY?
            </h1>
            {/* <!--Button--> */}
            <div className="flex justify-around">
              <a href="">
                <img className="p-3 px-6 pt-2" src="/images/orderPickup.png" />
              </a>
              <a href="">
                <img className="p-3 px-6 pt-2" src="/images/orderDelivery.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
