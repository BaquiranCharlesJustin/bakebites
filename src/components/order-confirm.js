import Link from "next/link";

export default function directions() {
  return (
    <div id="location" className="bg-aboutUs h-screen">
      <nav className="p-3"></nav>

      <div className="bg-pageBG bg-white h-5/6 flex">
        <div className="flex justify-start items-center container mx-auto p-2 flex-col">
          {/* <!-- labas na border --> */}
          <div className="border-4 border-menuNavBar p-2">
            {/* <!-- inside border with content --> */}
            <div className="bg-hoursLocation/80 border-2 border-slate-950 p-6 flex flex-col">
              <div className="h-full w-full">
                <div className="flex flex-col  border-x-slate-700 space-y-6">
                    <div className="flex flex-row gap-x-2">
                      <p>Ordered By:</p>
                      <p className="card bg-base-300 rounded-box place-items-center px-2"> AMANDA VILLANUEVA</p>
                    </div>
                    <div class="bg-menuNavBar border-2 rounded-full border-black flex justify-center items-center space-x-4"></div>

                </div>
                <div className="py-3 flex items-center justify-center">
                  <div className="card bg-base-300 rounded-full place-items-center w-24 ">
                    <Link href ="/">Confirm</Link>
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
