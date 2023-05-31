import Navbar from "./component/header";
import Awards from "./component/awards";
import Services from "./component/services";
import Gallery from "./component/gallery";
import Trainers from "./component/trainers";
import Membership from "./component/membership";
function App() {
  return (
    <>
      <Navbar />
      <Awards />
      <Services />
      <Gallery />
      <Trainers />
      <Membership />
    </>
  );
}

export default App;
