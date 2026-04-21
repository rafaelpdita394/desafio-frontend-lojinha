import { useEffect, useState } from "react"
import { getProducts } from "../services/Api"
import ProductCard from "../components/ProductCard"
import { useDebounce } from "../hooks/useDebouce"

function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 500)

  const [selectedCategory, setSelectedCategory] = useState("")

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

  const categories = [...new Set(products.map(p => p.category))]

  const filteredProducts = products
    .filter(product =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .filter(product =>
      selectedCategory ? product.category === selectedCategory : true
    )

  // 🔥 LOADING
  if (loading) {
    return (
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        padding: "30px"
      }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              height: "220px",
              borderRadius: "12px",
              background: "linear-gradient(90deg, #111, #1a1a1a, #111)",
              animation: "pulse 1.5s infinite"
            }}
          />
        ))}
      </div>
    )
  }

  // ❌ ERRO
  if (error) {
    return <p style={{ padding: "30px", color: "red" }}>{error}</p>
  }

  // ✅ UI FINAL
  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{
        marginBottom: "20px",
        background: "linear-gradient(135deg, var(--primary), var(--secondary))",
        WebkitBackgroundClip: "text",
        color: "transparent"
      }}>
        Produtos
      </h1>

      {/* 🔍 BUSCA */}
      <input
        type="text"
        placeholder="Buscar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid var(--border)",
          background: "var(--bg-secondary)",
          color: "var(--text)"
        }}
      />

      <div style={{ display: "flex", gap: "20px" }}>

        {/* 🧭 SIDEBAR */}
        <div style={{ width: "200px" }}>
          <h3>Categorias</h3>

          <button className="button" onClick={() => setSelectedCategory("")}>
            Todas
          </button>

          {categories.map(cat => (
            <button
              key={cat}
              className="button"
              style={{ marginTop: "10px", width: "100%" }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🛍 PRODUTOS */}
        <div style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "25px"
        }}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Home