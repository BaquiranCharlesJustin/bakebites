import Format from "../layout/format";
import { useLayoutEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Components
import Homepage from "../components/homepage";
import Directions from "../components/directions";
import Cakes from "../components/cakes";
import Cupcake from "../components/cupcake";
import Bakery from "../components/bakery";

export default function Home() {
  useLayoutEffect(() => {
    if (!sessionStorage.getItem("state")) {
      sessionStorage.setItem("state", uuidv4());
    }
  }, []);
  return (
    <Format>
      <Homepage></Homepage>
      <Directions></Directions>
      <Cakes></Cakes>
      <Cupcake></Cupcake>
      <Bakery></Bakery>
    </Format>
  );
}
