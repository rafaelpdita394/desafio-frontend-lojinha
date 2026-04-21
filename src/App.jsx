import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Cart from "./pages/Cart/Cart"
/*import { useCartStore } from "./store/cartStore" */
import Header from "./components/layout/Header"


function App() {
  /*
  teste 
  const cart = useCartStore(state => state.cart)

  console.log("Carrinho:", cart)*/
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home
      
      />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
    </>
  )
}

export default App