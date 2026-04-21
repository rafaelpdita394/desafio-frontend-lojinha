import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
      <div style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "15px",
        transition: "0.3s",
        backdropFilter: "blur(8px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-5px) scale(1.02)"
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)"
      }}
      >
        <img
          src={product.image}
          style={{
            width: "100%",
            height: "160px",
            objectFit: "contain",
            marginBottom: "10px"
          }}
        />

        <h3 style={{
          color: "var(--text)",
          fontSize: "14px",
          marginBottom: "8px"
        }}>
          {product.title}
        </h3>

        <p style={{
          color: "var(--accent)",
          fontWeight: "bold"
        }}>
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