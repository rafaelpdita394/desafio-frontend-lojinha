function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "8px",
      textAlign: "center"
    }}>
      <img 
        src={product.image} 
        alt={product.title} 
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
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
  )
}

export default ProductCard