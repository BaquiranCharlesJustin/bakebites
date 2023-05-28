import Image from "next/image";
import Link from "next/link";
import fetcher from "../lib/fetcher";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

export default function cartpage() {
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const userSession = sessionStorage.getItem("state");
    fetchCartData(userSession);
  }, []);

  const fetchCartData = async (userSession) => {
    try {
      const response = await fetch(`api/carts/${userSession}`);
      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }
      const data = await response.json();
      setCartData(data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearData = () => {
    sessionStorage.setItem("state", uuidv4());
  };

  if (isError) {
    return <div>Failed to load cart data</div>;
  }

  if (isLoading) {
    return <div>Loading cart data...</div>;
  }
  return (
    <div id="cartpage" className="space-y-4 p-6">
      <div className="bg-menuNavBar border-4 border-aboutUs flex justify-center items-center space-x-4">
        <h1 className="font-bebasNeue tracking-widest text-outline text-white text-5xl">
          YOUR
        </h1>
        <Image
          src={"/images/BakeBitesLogo.png"}
          width={150}
          height={150}
          fill={false}
          className="rounded-full"
        />
        <h1 className="font-bebasNeue tracking-widest text-outline text-white text-5xl">
          CAKE
        </h1>
      </div>

      <Cart data={cartData} />

      <div className="bg-menuNavBar border-4 border-aboutUs p-1 flex">
        <div className="bg-menuNavBar border-2 border-black py-2 px-4 flex justify-between grow">
          <div className="flex">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox checkbox-lg"
            />
            <p className="text-3xl font-poppins text-outline">All</p>
          </div>
          <p className="text-3xl font-poppins text-outline">
            Total:
            <Tots data={cartData} />
          </p>
        </div>
        <div className="hover:bg-red-600 bg-darkBlue border-2 border-black py-2 px-4 flex justify-between text-2xl font-poppins text-outline">
          <Link onClick={clearData} scroll={false} href="/?cart=1">
            Clear Order/s
          </Link>
        </div>
        <div className="hover:bg-red-600 bg-darkBlue border-2 border-black py-2 px-4 flex justify-between text-2xl font-poppins text-outline">
          <Link scroll={false} href="/?order=1">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

function Cart({ data }) {
  return (
    <>
      {data.map((value, index) => (
        <CartItem key={index} data={value} />
      ))}
    </>
  );
}

function CartItem({ data }) {
  const { productId, amount, productType } = data;

  if (productType === "cake") {
    return <CakeCart productId={productId} amount={amount} />;
  }

  if (productType === "cupcake") {
    return <CupcakeCart productId={productId} amount={amount} />;
  }

  if (productType === "bakery") {
    return <BakeryCart productId={productId} amount={amount} />;
  }

  return null;
}

function CakeCart({ productId, amount }) {
  const [cakeData, setCakeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchCakeData(productId);
  }, [productId]);

  const fetchCakeData = async (productId) => {
    try {
      const response = await fetch(`api/cakes/${productId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch cake data");
      }
      const data = await response.json();
      setCakeData(data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isError) {
    return <div>Failed to load cake data</div>;
  }

  if (isLoading) {
    return <div>Loading cake data...</div>;
  }

  return (
    <>
      <div className="bg-menuNavBar border-4 border-aboutUs">
        <div className="bg-menuNavBar border-2 border-black flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-8">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox checkbox-lg"
            />
            <Image
              className="border-menuNavBar bg-menuNavBar rounded-full"
              src={`/images/cake${cakeData.id}.jpg`}
              width={250}
              height={100}
              fill={false}
            />
            <p className="font-poppins text-xl font-bold">{cakeData.name}</p>
          </div>
          <div className="space-y-4">
            <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-3xl font-poppins text-outline">
              Size: {cakeData.size}
            </div>
            <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-xl font-poppins text-outline">
              Amount: {amount}
            </div>
            <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-xl font-poppins text-outline">
              Price: {cakeData.price}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CupcakeCart({ productId, amount }) {
  const [cupcakeData, setCupcakeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchcupcakeData(productId);
  }, [productId]);

  const fetchcupcakeData = async (productId) => {
    try {
      const response = await fetch(`api/cupcakes/${productId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch cake data");
      }
      const data = await response.json();
      setCupcakeData(data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isError) {
    return <div>Failed to load cake data</div>;
  }

  if (isLoading) {
    return <div>Loading cake data...</div>;
  }

  return (
    <>
      <div className="bg-menuNavBar border-4 border-aboutUs">
        <div className="bg-menuNavBar border-2 border-black flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-8">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox checkbox-lg"
            />
            <Image
              className="border-menuNavBar bg-menuNavBar rounded-full"
              src={`/images/cupcakes${cupcakeData.id}.jpg`}
              width={250}
              height={100}
              fill={false}
            />
            <p className="font-poppins text-xl font-bold">{cupcakeData.name}</p>
          </div>
          <div className="space-y-4">
            <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-3xl font-poppins text-outline">
              Size: {cupcakeData.size}
            </div>
            <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-xl font-poppins text-outline">
              Amount: {amount}
            </div>
            <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-xl font-poppins text-outline">
              Price: {cupcakeData.price}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BakeryCart({ productId, amount }) {
  const [bakeryData, setBakeryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchbakeryData(productId);
  }, [productId]);

  const fetchbakeryData = async (productId) => {
    try {
      const response = await fetch(`api/bakery/${productId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch cake data");
      }
      const data = await response.json();
      setBakeryData(data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isError) {
    return <div>Failed to load cake data</div>;
  }

  if (isLoading) {
    return <div>Loading cake data...</div>;
  }

  return (
    <>
      <div className="bg-menuNavBar border-4 border-aboutUs">
        <div className="bg-menuNavBar border-2 border-black flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-8">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox checkbox-lg"
            />
            <Image
              className="border-menuNavBar bg-menuNavBar rounded-full"
              src={`/images/bakery${bakeryData.id}.jpg`}
              width={250}
              height={100}
              fill={false}
            />
            <p className="font-poppins text-xl font-bold">{bakeryData.name}</p>
          </div>
          <div className="space-y-4">
            <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-3xl font-poppins text-outline">
              Size: {bakeryData.size}
            </div>
            <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-xl font-poppins text-outline">
              Amount: {amount}
            </div>
            <div className="bg-menuNavBar border-2 border-black py-2 px-4 text-xl font-poppins text-outline">
              Price: {bakeryData.price}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Tots({ data }) {
  const calculateTotal = () => {
    let totalPrice = 0;

    data.forEach((product) => {
      const productType = product.productType;
      const productId = product.productId;
      const amount = product.amount;

      if (productType === "cake") {
        const {
          data: cakeData,
          isLoading: cakeLoading,
          isError: cakeError,
        } = fetcher(`api/cakes/${productId}`);

        if (!cakeLoading && !cakeError && cakeData) {
          totalPrice += cakeData.price * amount;
        }
      } else if (productType === "cupcake") {
        const {
          data: cupcakeData,
          isLoading: cupcakeLoading,
          isError: cupcakeError,
        } = fetcher(`api/cupcakes/${productId}`);

        if (!cupcakeLoading && !cupcakeError && cupcakeData) {
          totalPrice += cupcakeData.price * amount;
        }
      } else if (productType === "bakery") {
        const {
          data: bakeryData,
          isLoading: bakeryLoading,
          isError: bakeryError,
        } = fetcher(`api/bakery/${productId}`);

        if (!bakeryLoading && !bakeryError && bakeryData) {
          totalPrice += bakeryData.price * amount;
        }
      }
    });

    return totalPrice;
  };

  const total = calculateTotal();

  return <>{total}</>;
}
