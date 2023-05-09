import Format from "../layout/format";

// Components
import Homepage from "../components/homepage";
import AboutUs from "../components/about-us";
import Directions from "../components/directions";
import Cakes from "../components/cakes";

export default function Home() {
  return (
    <Format>
      <Homepage></Homepage>
      <AboutUs></AboutUs>
      <Directions></Directions>
      <Cakes></Cakes>
    </Format>
  )
}