import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Welcome from "./Pages/Welcome";
import Signin from "./Pages/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
