import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Welcome from "./Pages/Welcome";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import Explore from './Pages/Explore'
import MyOrders from "./Pages/MyOrders";
import MyAccount from './Pages/MyAccount'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="explore" element={<Explore />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="myaccount" element={<MyAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
