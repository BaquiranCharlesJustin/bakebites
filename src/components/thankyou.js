export default function thankyou() {
    return (
      <div id="location" className="bg-aboutUs h-screen">
        <nav className="p-3 flex justify-center font-description text-5xl ">Ibayo, Pinaod, San Ildefonso, Bulacan, Philippines | marianoimee4@gmail.com | +63 912 686 1945</nav>
  
        <div className="bg-pageBG bg-white h-5/6 flex">
          <div className="flex justify-start items-center container mx-auto p-2 flex-col">
            {/* <!-- labas na border --> */}
            <div className="border-4 border-slate-950 p-2">
              {/* <!-- inside border with content --> */}
              <div className="bg-hoursLocation/80 border-2 border-slate-950 p-6 flex flex-col">
                <div className="h-72 w-full relative">
                  <p className="card bg-base-300 rounded-full py-3 w-auto text-center text-5xl ">Thank you for <br/> Ordering!</p>
                  <p className="">KINDLY WAIT THE CONFIRMATION CALL OF YOUR ORDER.</p>
                  <img
                        className="h-48 w-48 rounded-full object-cover flex items-end justify-end absolute right-1"
                        src="/images/BakeBitesLogo.png"
                        alt=""
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="p-3 flex justify-center">Ibayo, Pinaod, San Ildefonso, Bulacan, Philippines | marianoimee4@gmail.com | +63 912 686 1945</nav>
      </div>
    );
  }
  