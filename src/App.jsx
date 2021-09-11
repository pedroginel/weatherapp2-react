import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages/Home";
import NavbarRB from "./Components/Navbar/Navbar";


function App() {

  return (
    <div>
      <NavbarRB />
      <Home/>
    </div>
  );
}

export default App;
