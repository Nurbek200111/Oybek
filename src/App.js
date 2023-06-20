import { Outlet } from "react-router-dom";
import HomePage from "./pages/home page/Home.page";

function App() {
  return (
    <div className="App">
     <HomePage/>
     <Outlet/>
    </div>
  );
}

export default App;
