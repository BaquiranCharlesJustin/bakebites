import Link from "next/link";

export default function homepage() {
  return (
    <div id="homepage" className="bg-aboutUs h-screen ">
      {/* <!--NavBar--> */}
      <div className="h-5/6">
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
              <div className="flex flex-col justify-center text-center gap-2">
                <h1 className="text-5xl font-bold font-bebasNeue">GOODNESS BAKED IN.</h1>
                <h2>Ibayo, Pinaod, San Ildelfonso, Bulacan, Philippines</h2>
              </div>

              {/* <!--Menu Items--> */}
              <div className="flex justify-center items-center gap-6">
                <p className="flex rounded-full text-xl font-bold text-darkBlue bg-aboutUs hover:bg-white p-2"><Link href ="#location">Menu</Link></p>
                <p className="flex rounded-full text-xl font-bold text-darkBlue bg-aboutUs hover:bg-white p-2"><Link href ="#location">Location</Link></p>
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- Landing Body Page --> */}
        <div className="bg-white/90 bg-pageBG bg-repeat py-36 ">
          <div className="bg-no-repeat bg-center bg-landingBG  ">
          <div className="flex items-center container mx-auto gap-10 p-3 justify-between rounded-full">
            <img
              className="object-contain flex rounded-full w-96 h-96"
              src="/images/BakeBitesLogo.png"
            />

            <div className="flex flex-col">
              <p className="text-center font-bold text-slate-900 text-6xl">Bake Bites</p>
              {/* <!-- border --> */}
              <div className="border-4 border-slate-950 p-2">
                  {/* <!-- laman ng border --> */}
                <div className="bg-aboutUs text-ellipsis overflow-hidden p-2">
                  <div className=" text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          </div>
        </div>
      </div>
      </div>
  );
}
