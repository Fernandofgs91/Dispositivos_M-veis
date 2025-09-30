# Cart - [Fernando / fork]

## Descrição
Implementação do carrinho com exibição de itens, controle de quantidade (+ / −), subtotal e total. Persistência em localStorage.

## O que foi implementado
- `CartContext` com `useReducer` (ações: ADD_ITEM, INCREMENT, DECREMENT, REMOVE_ITEM, CLEAR_CART)
- Componente `Cart` para exibir itens e controlar quantidades
- Integração do botão "Adicionar ao carrinho" nos cards de produtos
- Persistência no `localStorage`
- Commits incrementais com mensagens descritivas

## Como rodar
```bash
git clone https://github.com/Fernandofgs91/Dispositivos_M-veis/cart-master
cd cart
npm install
npm start
