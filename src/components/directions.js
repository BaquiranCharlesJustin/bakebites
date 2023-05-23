export default function directions() {
  return (
    <div id="location" className="bg-aboutUs h-screen">
      <nav className="p-3"></nav>

      <div className="bg-pageBG bg-white/90 h-5/6 flex">
        <div className="flex justify-start items-center container mx-auto p-2 flex-col">
          {/* <!-- labas na border --> */}
          <div className="border-4 border-slate-950 p-2">
            {/* <!-- inside border with content --> */}
            <div className="bg-hoursLocation/80 border-2 border-slate-950 p-6 flex flex-col">
              <div className="h-72 w-full">
                <h1 className="font-bold text-center text-5xl">STORE HOURS & LOCATION</h1>
                <h2 className="font-bold text-center text-xl p-2">
                  Ibayo, Pinaod, San Ildefonso, Bulacan, Philippines
                </h2>
                <h3 className="font-bold text-center text-xl p-2">
                  marianoimee4@gmail.com
                </h3>
                <h4 className="font-bold text-center text-xl p-2">
                  +63 912 686 1945
                </h4>
                <h5 className="font-bold text-center text-lg p-6">Regular Hours</h5>
                <h6 className="font-bold text-center text-lg">
                  *Insert Time Here*
                </h6>
              </div>
            </div>
          </div>
          {/* <!-- Get Directions --> */}
          <div>
            <h1 className="font-bold text-center text-6xl text-slate-900">GET DIRECTIONS</h1>
            {/* <!-- Get Direction Buttons --> */}
            <a className="flex justify-center items-center"
             href="https://www.google.com/maps/place/San+Ildefonso,+Bulacan/@15.0566215,120.9160181,12z/data=!3m1!4b1!4m6!3m5!1s0x339703019286e87b:0x103e9bd52fbe9c29!8m2!3d15.0417552!4d121.0105733!16zL20vMDZwel9n"
             target="_blank"
             rel="noopener noreferrer">
              <img className="p-3 px-6 pt-2" src="/images/clickHere.png" />
            </a>
          </div>
          {/* <!-- MENU --> */}
          <div id="menu">
            <h1 className="font-bold text-center text-6xl text-slate-900">MENU</h1>
            {/* <!-- Menu Buttons --> */}
            <div className="flex items-center">
              <a className="flex justify-center" href="#cakes">
                <img className="" src="/images/Cakes.png" />
              </a>
              <a className="flex justify-center" href="#cupcake">
                <img className="" src="/images/Cupcakes.png" />
              </a>
              <a className="flex justify-center" href="#bakery">
                <img className="" src="/images/Bakery.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="p-3"></nav>
    </div>
  );
}
