
export async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products")

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos")
  }

  return response.json()
}


/* Criar função para buscar por ID */

export async function getProductById(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)

  if (!response.ok) {
    throw new Error("Erro ao buscar produto")
  }

  return response.json()
}