import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductById } from "../services/api"
import { useCartStore } from "../store/cartStore"

/* 
Quando a URL tiver um ID, eu quero ler esse ID dentro do componente.

Esse código é usado para pegar um parâmetro da URL — normalmente o ID de um produto — usando o React Router. */

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const addToCart = useCartStore(state => state.addToCart)

  /* 
    useParams?
    É um hook do React Router que pega valores dinâmicos da URL 
    
    <Route path="/product/:id" element={<ProductDetails />} />
    
    */

    useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(id)
        setProduct(data)
      } catch (err) {
        console.error(err)
        setError("Erro ao carregar produto")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  // 🔥 ESSA PARTE EVITA O ERRO
  if (loading) return <p>Carregando produto...</p>
  if (error) return <p>{error}</p>
  if (!product) return <p>Produto não encontrado</p>

  return (
    <div style={{ padding: "20px" }}>
      
      <h1>{product.title}</h1>

      <img 
        src={product.image} 
        alt={product.title}
        style={{ width: "200px" }}
      />

      <p>{product.description}</p>

      <h2>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}
      </h2>

      <button style={{
      marginTop: "20px",
      padding: "10px",
      cursor: "pointer"
    }}
        onClick={() => {
        console.log("Produto adicionado:", product)
        addToCart(product)
        }}
      >
      Adicionar ao carrinho
    </button>
    </div>
  )
}

export default ProductDetails