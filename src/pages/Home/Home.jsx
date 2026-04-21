import { useEffect, useState } from "react"
import { getProducts } from "../../services/api"
import ProductGrid from "../../components/product/ProductGrid"

function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch {
        setError("Erro ao carregar produtos")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  return (
    <div style={{ padding: "30px" }}>
      <h1>Produtos</h1>
      <ProductGrid products={products} />
    </div>
  )
}

export default Home