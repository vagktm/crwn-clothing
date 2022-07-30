import Home from "./components/routes/home/home.component"
import Navigation from "./components/routes/navigation/navigation.component"
import Signin from "./components/routes/sign-in/sign-in.component"
import { Routes, Route } from "react-router-dom"

const Shop = () => {
  return <h1>Hi im Shop</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Signin />} />
      </Route>
    </Routes>
  )
}

export default App
