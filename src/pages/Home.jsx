import { useEffect, useState } from "react"
import { getProducts } from "../services/Api"
import ProductCard from "../components/ProductCard"

function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  /*
  useEffect(() => {
    getProducts().then(data => setProducts(data))
  }, [])
  */
  /* 
  setProducts(data) atualiza o estado
  React redesenha a tela
  products agora tem os dados
  */

  useEffect(() => {
  async function fetchData() {
    try {
      const data = await getProducts()
      setProducts(data)
    } catch (error) {
      setError("Erro ao carregar produtos")
    } finally {
      setLoading(false)
    }
  }

  fetchData()
}, [])

  if (loading) {
    return <p>Carregando produtos...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
  <div>
  <h1>Produtos</h1>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px"
  }}>
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>
)}

export default Home