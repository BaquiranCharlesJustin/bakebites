export default function directions() {
  return (
    <div class="bg-aboutUs h-screen">
      <nav class="p-3"></nav>

      <div class="bg-pageBG bg-white h-5/6 flex">
        <div class="flex justify-start items-center container mx-auto p-2 flex-col">
          {/* <!-- labas na border --> */}
          <div class="border-4 border-slate-950 p-2">
            {/* <!-- inside border with content --> */}
            <div class="bg-hoursLocation/80 border-2 border-slate-950 p-6 flex flex-col">
              <div class="h-72 w-full">
                <h1 class="font-bold text-center text-3xl">HOURS & LOCATION</h1>
                <h2 class="font-bold text-center text-2xl p-2">
                  Ibayo, Pinaod, San Ildefonso, Bulacan, Philippines
                </h2>
                <h3 class="font-bold text-center text-1xl p-2">
                  marianoimee4@gmail.com
                </h3>
                <h4 class="font-bold text-center text-xl p-2">
                  +63 912 686 1945
                </h4>
                <h5 class="font-bold text-center text-lg p-6">Regular Hours</h5>
                <h6 class="font-bold text-center text-lg">
                  *Insert Time Here*
                </h6>
              </div>
            </div>
          </div>
          {/* <!-- Get Directions --> */}
          <div>
            <h1 class="font-bold text-center text-6xl text-slate-900">GET DIRECTIONS</h1>
            {/* <!-- Get Direction Buttons --> */}
            <a class="flex justify-center items-center" href="">
              <img class="p-3 px-6 pt-2" src="/images/clickHere.png" />
            </a>
          </div>
          {/* <!-- MENU --> */}
          <div>
            <h1 class="font-bold text-center text-6xl text-slate-900">MENU</h1>
            {/* <!-- Menu Buttons --> */}
            <div class="flex items-center">
              <a class="flex justify-center" href="">
                <img class="" src="/images/Cakes.png" />
              </a>
              <a class="flex justify-center" href="">
                <img class="" src="/images/Cupcakes.png" />
              </a>
              <a class="flex justify-center" href="">
                <img class="" src="/images/Bakery.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav class="p-3"></nav>
    </div>
  );
}
