import { Link } from "react-router-dom"
import { useCartStore } from "../../store/cartStore"

function Header() {
  const cart = useCartStore(state => state.cart)

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 25px",
      background: "rgba(10, 15, 30, 0.7)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border)",
      position: "sticky",
      top: 0,
      zIndex: 10
    }}>
      <Link to="/" style={{ textDecoration: "none", color: "var(--text)" }}>
        <h2 style={{ fontWeight: "bold" }}>🚀 Lojinha Desenvolve </h2>
      </Link>

      <Link to="/cart" style={{ textDecoration: "none", color: "var(--text)" }}>
        <div style={{ position: "relative" }}>
          🛒

          {/* BADGE */}
          {totalItems > 0 && (
            <span style={{
              position: "absolute",
              top: "-8px",
              right: "-10px",
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
              color: "#fff",
              fontSize: "12px",
              padding: "2px 6px",
              borderRadius: "50%",
              animation: "pop 0.3s ease"
            }}>
              {totalItems}
            </span>
          )}
        </div>
      </Link>
    </header>
  )
}

export default Header