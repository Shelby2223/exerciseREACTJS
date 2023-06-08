import './App.css';
import {Routesweb} from './mistermtest/Routesweb';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowProduct from './APILaravel/ShowProduct';
import { RoutesAdmin } from './APILaravel/RoutesAdmin';
import ShowProductmid from './APILaravel/ShowProductmid';
function App() {
  // const renderPages = () => {
  //   return RoutesAdmin.map((page) => (
  //     <Route
  //       key={page.path}
  //       path={page.path}
  //       element={page.element}
  //       index={page.index}
  //     />
  //   ))
  // }

  return (
    // <Router>
    //   <Routes>
    //     {renderPages()}
    //   </Routes>
    // </Router>
    <ShowProductmid></ShowProductmid>
  );
}

export default App;


