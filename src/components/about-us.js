export default function aboutUs() {
  return (
    <div id="about" className="bg-aboutUs h-screen">
      <nav className="p-3"></nav>

      <div className="bg-pageBG bg-white h-5/6 flex">
        <div className="flex items-center container mx-auto gap-10 p-6 justify-between">
          <img
            className="object-contain flex rounded-full w-96 h-96"
            src="/images/BakeBitesLogo.png"
          />

          <div className="flex flex-col">
            <p className="text-center font-bold text-slate-900">ABOUT US</p>
            {/* <!-- border --> */}
            <div className="border-4 border-slate-950 p-2">
              {/* <!-- laman ng border --> */}
              <div className="bg-aboutUs">
                <div className="h-52 w-full">
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

      <nav className="p-3"></nav>
    </div>
  );
}
