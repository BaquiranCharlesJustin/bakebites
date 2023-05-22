import Link from "next/link";

export default function thankyou() {
    return (
      <div id="thankyou" className="bg-aboutUs h-screen">
        <nav className="p-3 flex justify-center font-description text-5xl ">Ibayo, Pinaod, San Ildefonso, Bulacan, Philippines | marianoimee4@gmail.com | +63 912 686 1945</nav>
  
        <div className="bg-pageBG bg-white h-5/6 flex justify-center">
          <div className="flex justify-center p-2 flex-col">
            {/* <!-- labas na border --> */}
            <div className="border-4 border-slate-950 p-2">
              {/* <!-- inside border with content --> */}
              <div className="bg-hoursLocation/80 border-2 border-slate-950 p-6 flex flex-col">
                <div className="relative">
                  <p className="card bg-white/80 rounded-full py-3 w-auto text-center text-5xl flex justify-center">Thank you for <br/> Ordering!</p>
                  <p className="flex justify-center"><br></br>KINDLY WAIT THE CONFIRMATION CALL OF YOUR ORDER. <br></br></p>
                  <p className="font-thin flex justify-center"><br></br>"For custom designs please message the facebook page". <br></br><br></br></p>
                  <p className="rounded-full bg-white flex justify-center hover:bg-darkGrayishBlue"><Link href="/">Go Back to Homepage</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="p-3 flex justify-center">Ibayo, Pinaod, San Ildefonso, Bulacan, Philippines | marianoimee4@gmail.com | +63 912 686 1945</nav>
      </div>
    );
  }
  