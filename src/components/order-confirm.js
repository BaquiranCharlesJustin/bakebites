import Link from "next/link";

export default function directions() {
  return (
    <div id="orderConfirm" className="bg-aboutUs h-screen">
      <nav className="p-3"></nav>

      <div className="bg-pageBG bg-white/90 h-5/6 flex justify-center">
        <div className="flex justify-center p-2 flex-col">
          {/* <!-- labas na border --> */}
          <div className="border-4 border-menuNavBar p-2 ">
            {/* <!-- inside border with content --> */}
            <div className="bg-hoursLocation/80 border-2 border-slate-950 p-6 flex flex-col">
              <div className="h-full w-full">
                <form className="border-x-slate-700 space-y-6">
                    <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                      <p className="text-2xl">Ordered By:</p>
                      <input type="text" placeholder="Full Name" className="input input-bordered rounded-full" />                   
                    </div>
                    <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                    <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                      <p className="text-2xl">Contact Number:</p>
                      <input type="text" placeholder="+63xxxxxxxxxx" className="input input-bordered rounded-full" />                   
                    </div>
                    <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                    <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                      <p className="text-2xl">Date:</p>
                      <p className="input input-bordered rounded-full"> 69/69/2069 </p>                   
                    </div>
                    <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                    <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                      <p className="text-2xl">Time:</p>
                      <p className="input input-bordered rounded-full"> ITS VALORANT TIME </p>                   
                    </div>
                    <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                    <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                      <p className="text-2xl">Location:</p>
                      <input type="text" placeholder="Full Address" className="input input-bordered rounded-full" />                   
                    </div>
                    <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                    <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                      <p className="text-2xl">Order/s:</p>
                      <p className="input input-bordered rounded-full"> Hats1l0g </p>                   
                    </div>
                    <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>
                    <div className="flex justify-between gap-x-2 place-items-center px-2 text-xl">
                      <p className="text-2xl">Pickup/Delivery:</p>
                      <div className="flex flex-row gap-x-3">
                        <p className="rounded-full bg-white p-2">Pickup</p>
                        <p className="rounded-full bg-white p-2 ">Delivery</p>
                      </div>                  
                    </div>          
                    <div class="bg-menuNavBar border-2 rounded-full border-black flex space-x-4"></div>       
                </form>
                <div className="py-3 flex items-center justify-center">
                  <div className="card bg-base-300 rounded-full place-items-center w-24 hover:bg-lime-300 ">
                    <Link href ="#thankyou">Confirm</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="p-3"></nav>
    </div>
  );
}
