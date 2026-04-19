import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <Link 
      to={`/product/${product.id}`} 
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
        textAlign: "center"
      }}>
        <img 
          src={product.image} 
          alt={product.title} 
          style={{ width: "200px", height: "100px", objectFit: "contain" }}
        />

        <h3 style={{ fontSize: "14px" }}>
          {product.title}
        </h3>

        <p>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard