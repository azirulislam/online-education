import "./App.css";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import BannerBottom from "./BannerBottom/BannerBottom";
import Services from "./Services/Services";
import Popular from "./Popular/Popular";
import Review from "./Review/Review";
import Fotter from "./Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <BannerBottom></BannerBottom>
        <Services></Services>
        <Popular></Popular>
        <Review></Review>
        <Fotter></Fotter>
      </div>
    </>
  );
}

export default App;
