import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
/*import { useCartStore } from "./store/cartStore" */
import Header from "./components/Header"


function App() {
  /*
  teste 
  const cart = useCartStore(state => state.cart)

  console.log("Carrinho:", cart)*/
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
    </>
  )
}

export default App