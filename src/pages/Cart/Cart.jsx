import { useCartStore } from "../../store/cartStore"

function Cart() {
  const cart = useCartStore(state => state.cart)
  const removeFromCart = useCartStore(state => state.removeFromCart)
  const increase = useCartStore(state => state.increaseQuantity)
  const decrease = useCartStore(state => state.decreaseQuantity)

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Carrinho</h1>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          {cart.map(item => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid var(--border)",
                padding: "15px 0"
              }}
            >
              {/* INFO */}
              <div style={{ maxWidth: "300px" }}>
                <h3>{item.title}</h3>

                <p style={{ color: "var(--text-muted)" }}>
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </p>
              </div>

              {/* QUANTIDADE */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <button className="button" onClick={() => decrease(item.id)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button className="button" onClick={() => increase(item.id)}>
                  +
                </button>
              </div>

              {/* SUBTOTAL */}
              <div>
                <strong>
                  {(item.price * item.quantity).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </strong>
              </div>

              {/* REMOVER */}
              <button
              
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "red",
                  cursor: "pointer"
                }}
              >
                ✕
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <div style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px"
          }}>
            <strong>Total:</strong>
            <strong>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </strong>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart