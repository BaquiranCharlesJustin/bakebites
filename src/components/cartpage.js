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
        <div className="border-2 mb-6 border-indigo-500 font-bold text-red-500">
          <input
            type="checkbox"
            id="checkbox1"
            class="peer relative appearance-none w-5 h-5 border rounded-sm focus:outline-none checked:bg-gray-300 hover:ring hover:ring-gray-300
             after:content-[' ']
             after:w-full
             after:h-full
             after:absolute
             after:left-0
             after:top-0
             after:bg-no-repeat
             after:bg-center
             after:bg-[length:40px]
             after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')]
             "
          />
          <div>
              <img
                className="h-36 w-36 rounded-full bg-white flex justify-center items-center"
                src="/images/BakeBitesLogo.png"
                alt=""
              />
              <p>
                SAD AKO HUHU
              </p>
          </div>
          <div>
           
          </div>
        </div>
      </div>

      <nav className="p-3"></nav>
    </div>
  );
}
