import Link from "next/link";
import fetcher from "../lib/fetcher";
import CakeModal from "./cake-modal";
import Modal from "./modal";
import { useRouter } from "next/router";

export default function cupcake() {
  const { data, isLoading, isError } = fetcher("api/cakes");
  let router = useRouter();
  console.log(router)
  return (
    <div id="cupcake" className="">
      {router.query.cakes && (
        <Modal
          onClose={() => {
            router.push(
              {
                pathname: router.pathname,
              },
              undefined,
              { scroll: false }
            );
          }}
        >
          <CakeModal cakeId={router.query.cakes}></CakeModal>
        </Modal>
      )}
      {/* <!--NavBar--> */}
      <nav className="">
        <div className="bg-navBarColor">
          {/* <!--Search,Cart,Message--> */}
          <div className="flex justify-between mx-auto">
            <div className="flex items-center pl-3">
              {/* <!-- CartMessageIcons --> */}

              <div className="flex h-36 w-36 gap-6 items-center">
                <a href="#cartpage">
                  <img className="" src="/images/cart.png" />
                </a>
              </div>
            </div>

            {/* <!--Title CupCakes--> */}
            <div className="order-2 flex flex-col text-center pt-3 pr-6 gap-5">
              <p className="font-bebasNeue tracking-widest text-weirdPinkColor text-outline text-5xl">CUP CAKES</p>
              <div>
                <p className="italic text-2xl text-outline font-poppins">
                  (NOTE: PRICE MAY VARY DEPENDING ON THE DESIGN)
                </p>
              </div>
            </div>

            {/* <!--Logo--> */}
            <div className="order-3 pr-3">
              <img
                className="h-36 w-36 rounded-full bg-white flex justify-center items-center"
                src="/images/BakeBitesLogo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Landing Body Page --> */}
      <div className="bg-white/90 bg-pageBG bg-repeat p-6">
        <div className="grid grid-cols-3 place-content-evenly gap-5 ">
          {/* <!-- CarrotCake --> */}
          {data?.map((value, index) => (
            <Cake data={value} key={index}></Cake>
          ))}
        </div>
      </div>
    </div>
  );
}

function Cake({ data }) {
  const { id, title } = data;

  return (
    <div class="flex flex-row">
      <img
        class="p-6 h-64 w-64 rounded-full border-4 border-menuNavBar bg-menuNavBar flex justify-center items-center"
        src={`/images/cupcake${id}.jpg`}
        alt=""
      />
      <div class="p-6 flex flex-col justify-center items-center text-center gap-5">
        <p class="font-bold text-2xl text-slate-900">{title || "Unknown"}</p>
        <Link scroll={false} href={`/?cakes=${id}`}>
          <img className="p-3 px-6 pt-2" src="/images/biteme.png" />
        </Link>
      </div>
    </div>
  );
}
