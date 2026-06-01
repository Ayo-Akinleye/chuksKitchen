import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
// auth pages
import Welcome from "./Pages/Welcome";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
// main pages
import Homepage from "./Pages/Homepage";
import Explore from './Pages/Explore'
import MyOrders from "./Pages/MyOrders";
import MyAccount from './Pages/MyAccount'
// others
import NoPage from "./Pages/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth pages/routes  */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Welcome />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          {/* <Route path="myaccount" element={<MyAccount />} /> */}
        </Route>

        {/* main pages/routes */}
        <Route path="/" element={<MainLayout />}>
          <Route path="homepage" element={<Homepage />} />
          <Route path="explore" element={<Explore />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="myaccount" element={<MyAccount />} />
          <Route path="*" element={<NoPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
