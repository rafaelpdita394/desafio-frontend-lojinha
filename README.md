# 🛍️ Desafio Frontend - Lojinha

## 🚀 Sprint 1 — Listagem de Produtos

✨ Funcionalidades implementadas
Criação do projeto com React + Vite

Estruturação inicial de pastas:
* components
* pages
* services
* Consumo de API de produtos (Fake Store API)
* Listagem dinâmica de produtos
* Criação do componente reutilizável ProductCard
* Exibição de:
* Imagem do produto
* Nome
* Preço formatado (R$)
* Layout em grid responsivo
* Tratamento de loading durante carregamento da API
* Tratamento de erro em falhas de requisição

## 🧠 Conceitos aplicados
* Componentização no React
* Props
* Hooks (useState, useEffect)
* Consumo de API com fetch
* Renderização de listas com .map()
* Renderização condicional
* Organização de código em camadas

- Listagem de produtos via API
- Componentização (ProductCard)
- Grid responsivo
- Loading state
- Tratamento de erro e funções assincronas

## 🛠️ Tecnologias
- React
- Vite
- JavaScript

## 🚀 Sprint 2 — Navegação e Detalhes do Produto

### ✨ Funcionalidades implementadas

* Implementação de rotas com React Router
* Navegação entre páginas sem recarregamento (SPA)
* Criação da página de detalhes do produto (`/product/:id`)
* Uso de parâmetros dinâmicos com `useParams`
* Consumo de API para buscar produto específico por ID
* Exibição de:

  * Imagem do produto
  * Nome
  * Descrição
  * Preço formatado
* Tratamento de loading e erro na página de detalhes
* Navegação ao clicar em um produto (via `Link`)

### 🧠 Conceitos aplicados

* React Router (`BrowserRouter`, `Routes`, `Route`, `Link`)
* Hooks do React (`useEffect`, `useState`)
* Manipulação de parâmetros de rota
* Requisições assíncronas com `fetch`
* Renderização condicional

## 🚀 Sprint 3 — Carrinho de Compras

### ✨ Funcionalidades implementadas

* Implementação de estado global com Zustand
* Adição de produtos ao carrinho
* Controle de quantidade por produto
* Evita duplicação de itens no carrinho
* Remoção de produtos do carrinho
* Persistência dos dados com `localStorage`
* Criação da página de carrinho (`/cart`)
* Exibição de:

  * Nome do produto
  * Quantidade
  * Preço unitário
  * Subtotal por item
* Cálculo do total geral do carrinho

### 🧠 Conceitos aplicados

* Gerenciamento de estado global (Zustand)
* Imutabilidade de estado
* Manipulação de arrays (`map`, `filter`, `reduce`)
* Persistência de dados no navegador
* Separação de responsabilidades (store vs UI)
* Renderização dinâmica baseada em estado global

### 📌 Rotas adicionadas

* `/cart` → Página de carrinho de compras

## 🚀 Sprint 4 — UI Avançada, UX e Funcionalidades Modernas

### ✨ Melhorias implementadas

* Criação de Header fixo com navegação
* Contador dinâmico de itens no carrinho (badge)
* Implementação de Dark Mode (alternância de tema)
* Layout moderno com gradientes e identidade visual consistente
* Melhorias visuais nos componentes (cards, botões, espaçamento)

---

### 🎨 UI/UX (Experiência do Usuário)

* Cards de produtos com efeito hover e animação
* Skeleton loading (loading visual moderno)
* Feedback visual mais fluido durante carregamento
* Layout responsivo com grid adaptativo
* Sidebar de categorias para navegação rápida

---

### 🔎 Funcionalidades Avançadas

* Busca de produtos com debounce (otimização de performance)
* Filtro por categoria (dinâmico a partir da API)
* Integração entre busca + filtro
* Atualização em tempo real da UI

---

### 🧠 Conceitos aplicados

* Custom Hooks (`useDebounce`)
* Controle de re-render e otimização de input
* Composição de filtros em arrays
* Manipulação avançada de estado
* Design system com variáveis CSS
* Separação entre lógica e apresentação

---

### 🎯 Diferenciais do projeto

* Interface moderna inspirada em aplicações reais
* Uso de padrões profissionais de UI/UX
* Estrutura preparada para escalabilidade
* Código organizado e reutilizável

---

### 📌 Progresso do Projeto

* ✅ Sprint 1 — Listagem de produtos
* ✅ Sprint 2 — Navegação e detalhes
* ✅ Sprint 3 — Carrinho de compras
* ✅ Sprint 4 — UI avançada e experiência do usuário

---

## ▶️ Como rodar
```bash
npm install
npm run dev

