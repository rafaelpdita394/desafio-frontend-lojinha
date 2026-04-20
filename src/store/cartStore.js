import { create } from "zustand"

export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],

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

  removeFromCart: (id) =>
    set((state) => {
      const newCart = state.cart.filter(item => item.id !== id)

      localStorage.setItem("cart", JSON.stringify(newCart))

      return { cart: newCart }
    })
}))

/* 


/* import { create } from "zustand" 

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find(item => item.id === product.id)

      if (exists) {
        return {
          cart: state.cart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }

      return {
        cart: [...state.cart, { ...product, quantity: 1 }] */
        /*

        
        🔍 Quebrando em partes
    🔹 state.cart

    👉 é o carrinho atual

    Exemplo:

    [
      { id: 1, title: "Camisa", quantity: 2 }
    ]
    🔹 ...state.cart

    👉 “espalha” os itens dentro de um novo array

    [ item1 ]
    🔹 { ...product, quantity: 1 }

    👉 cria um novo objeto baseado no produto

    Exemplo:

    product = { id: 2, title: "Tênis", price: 100 }

    vira:

    { id: 2, title: "Tênis", price: 100, quantity: 1 }
    🔥 Resultado final
    cart: [
    { id: 1, title: "Camisa", quantity: 2 },
    { id: 2, title: "Tênis", quantity: 1 }
    ]

        ...state.cart → mantém os antigos
        { ...product, quantity: 1 } → adiciona novo com quantidade 1
        */
       /*
      }
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter(item => item.id !== id)
    }))

    /*
    O filter
    item.id !== id

    👉 mantém só os diferentes de 1 */
   /*
})) */
