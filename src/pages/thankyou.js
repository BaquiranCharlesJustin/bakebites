import Link from "next/link";

export default function thankyou() {
    return (
      <div id="thankyou" className="bg-aboutUs h-screen">
        <nav className="p-3 flex justify-center font-description text-xl font-poppins font-bold">Ibayo, Pinaod, San Ildefonso, Bulacan, Philippines | marianoimee4@gmail.com | +63 912 686 1945</nav>
  
        <div className="bg-pageBG bg-white/90 h-5/6 flex justify-center">
          <div className="flex justify-center p-2 flex-col">
            {/* <!-- labas na border --> */}
            <div className="border-4 border-slate-950 p-2">
              {/* <!-- inside border with content --> */}
              <div className="bg-hoursLocation/80 border-2 border-slate-950 p-6 flex flex-col">
                <div className="relative">
                  <p className="card bg-white/80 rounded-full py-3 w-auto text-center text-5xl flex justify-cente font-poppins text-outline text-weirdPinkColor">Thank you for <br/> Ordering!</p>
                  <p className="flex justify-center font-poppins text-white text-outline"><br></br>KINDLY WAIT THE CONFIRMATION CALL OF YOUR ORDER. <br></br></p>
                  <p className="font-thin flex justify-center font-poppins text-outline text-white "><br></br>"For custom designs please message the facebook page". <br></br><br></br></p>
                  <p className="rounded-full bg-white flex justify-center hover:bg-darkGrayishBlue font-poppins"><Link href="/">Go Back to Homepage</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="p-3 flex justify-center font-poppins font-bold text-xl">Ibayo, Pinaod, San Ildefonso, Bulacan, Philippines | marianoimee4@gmail.com | +63 912 686 1945</nav>
      </div>
    );
  }
  