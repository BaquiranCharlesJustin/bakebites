import Format from "../layout/format";

// Components
import Homepage from "../components/homepage";
import Directions from "../components/directions";
import Cakes from "../components/cakes";
import Cartpage from "../components/cartpage";
import OrderConfirm from "../components/order-confirm";
import Thankyou from "../components/thankyou";
import Cupcake from "../components/cupcake";
import Bakery from "../components/bakery";

export default function Home() {
  return (
    <Format>
      <Homepage></Homepage>
      <Directions></Directions>
      <Cakes></Cakes>
      <Cupcake></Cupcake>
      <Bakery></Bakery>
      <Cartpage></Cartpage>
      <OrderConfirm></OrderConfirm>
      <Thankyou></Thankyou>
    </Format>
  );
}
