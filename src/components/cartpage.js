export default function cartpage() {
  return (
    <div id="cartpage" className="bg-navBarColor h-screen">
      <nav className="border-4 border-brightRed grid grid-cols-3 items-end gap-4 p-3">
        {/* Header */}
        <div className="col-start-2 flex justify-center items-center">
          <p className="pr-6 text-2xl font-bold">YOUR</p>
          <img
            className="object-contain flex rounded-full w-44 h-44"
            src="/images/BakeBitesLogo.png"
          />
          <p className="pl-6 text-2xl font-bold">BASKET</p>
        </div>
        {/* <!-- Return Button --> */}
        <div className="grid grid-rows-5 justify-items-end">
          <a href="">
            <img className="w-10 h-10" src="/images/cart.png" />
          </a>
        </div>
      </nav>

      <div className="bg-pageBG bg-white h-5/6 grid grid-rows-2 border-4 border-lime-400 p-3 pb-6">
        <div className="flex justify-center items-center border-2 mb-6 border-indigo-500 font-bold text-red-500">
          asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
          asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
          asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
          asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
        </div>
      </div>

      <nav className="p-3"></nav>
    </div>
  );
}
