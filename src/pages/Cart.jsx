import { useCartStore } from "../store/cartStore"

function Cart() {
  const cart = useCartStore(state => state.cart)
  const removeFromCart = useCartStore(state => state.removeFromCart)

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <div style={{ padding: "20px" }}>
      <h1>Carrinho</h1>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          {cart.map(item => (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid #ccc",
                marginBottom: "10px",
                paddingBottom: "10px"
              }}
            >
              <h3>{item.title}</h3>

              <p>Quantidade: {item.quantity}</p>

              <p>
                Preço unitário:{" "}
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
              </p>

              <p>
                Subtotal:{" "}
                {(item.price * item.quantity).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
              </p>

              <button onClick={() => removeFromCart(item.id)}>
                Remover
              </button>
            </div>
          ))}

          {/* 🔥 TOTAL FORA DO MAP */}
          <h2 style={{ marginTop: "20px" }}>
            Total do carrinho:{" "}
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}
          </h2>
        </>
      )}
    </div>
  )
}

export default Cart