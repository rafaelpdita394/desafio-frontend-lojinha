import React from "react"
import ReactDOM from "react-dom/client"
/* É a parte do React responsável por renderizar sua aplicação no navegador. */
import { BrowserRouter } from "react-router-dom"
/* O react-router-dom serve para criar navegação entre páginas no React, sem recarregar o site. */
import App from "./App.jsx"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)