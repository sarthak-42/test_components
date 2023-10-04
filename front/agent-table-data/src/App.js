import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

//import ViewTable from "./components/ViewTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddEdit from "./components/AddEdit";
// import AddAgent from "./components/AddAgent";
// import AddEdit from "./components/AddEdit";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact to path="/" Component={Home}></Route>
          <Route exact to path="/addAgent" Component={AddEdit}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
