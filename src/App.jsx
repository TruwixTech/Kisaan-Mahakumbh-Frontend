import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Donation from "./components/Donation";
import RegisterPopup from "./components/RegisterPopup";
import RegisterNow from "./components/RegisterNow";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <div className="w-auto h-auto">
        <Outlet />
        <ScrollToTop />
        <Donation />
        <RegisterNow />
        <RegisterPopup />
        <Footer />
      </div>
    </>
  );
}

export default App;
