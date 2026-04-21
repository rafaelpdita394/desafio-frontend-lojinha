import { create } from "zustand"

export const useCartStore = create((set) => ({

  // 🧠 Estado inicial
  cart: JSON.parse(localStorage.getItem("cart")) || [],


  // 💾 Função interna para salvar
  saveCart: (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart))
  },


  // ➕ Adicionar ao carrinho
  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find(item => item.id === product.id)

      let newCart

      if (exists) {
        newCart = state.cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        newCart = [...state.cart, { ...product, quantity: 1 }]
      }

      localStorage.setItem("cart", JSON.stringify(newCart))
      return { cart: newCart }
    }),


  // ❌ Remover item
  removeFromCart: (id) =>
    set((state) => {
      const newCart = state.cart.filter(item => item.id !== id)

      localStorage.setItem("cart", JSON.stringify(newCart))
      return { cart: newCart }
    }),


  // 🔼 Aumentar quantidade
  increaseQuantity: (id) =>
    set((state) => {
      const newCart = state.cart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      localStorage.setItem("cart", JSON.stringify(newCart))
      return { cart: newCart }
    }),


  // 🔽 Diminuir quantidade
  decreaseQuantity: (id) =>
    set((state) => {
      const newCart = state.cart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)

      localStorage.setItem("cart", JSON.stringify(newCart))
      return { cart: newCart }
    })

}))