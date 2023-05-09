export default function homepage() {
  return (
    <div class="bg-aboutUs h-screen">
      {/* <!--NavBar--> */}
      <nav class="p-6">
        <div class="border-4 border-slate-950">
          <div class="bg-navBarColor flex justify-around">
            {/* <!--Logo--> */}
            <div class="p-2">
              <img
                class="h-36 w-36 rounded-full bg-white flex justify-center items-center"
                src="/images/BakeBitesLogo.png"
                alt=""
              />
            </div>

            {/* <!--Title--> */}
            <div class="flex flex-col justify-center text-center">
              <h1>GOODNESS BAKED IN.</h1>
              <h2>Ibayo, Pinaod, San Ildelfonso, Bulacan, Philippines</h2>
            </div>

            {/* <!--Menu Items--> */}
            <div class="flex items-center gap-6">
              <a
                href="#"
                class="rounded-md text-xl font-bold text-darkBlue bg-aboutUs"
              >
                About
              </a>
              <a
                href="#"
                class="rounded-md text-xl font-bold text-darkBlue bg-aboutUs"
              >
                Menu
              </a>
              <a
                href="#"
                class="rounded-md text-xl font-bold text-darkBlue bg-aboutUs"
              >
                Location
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Landing Body Page --> */}
      <div class="bg-white bg-pageBG bg-repeat p-6">
        <div class="bg-no-repeat bg-center flex justify-center items-center h-[640px] w-full bg-landingBG p-6">
          <div class="bg-orderNow/50 h-60 w-[700px] flex flex-col justify-around">
            <h1 class="text-6xl text-center text-white font-bold outline-4 outline-black">
              ORDER FOR PICKUP OR DELIVERY?
            </h1>
            {/* <!--Button--> */}
            <div class="flex justify-around">
              <a href="">
                <img class="p-3 px-6 pt-2" src="/images/orderPickup.png" />
              </a>
              <a href="">
                <img class="p-3 px-6 pt-2" src="/images/orderDelivery.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
