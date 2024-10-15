import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isOpen: false,
  entregaAtiva: false,
  pagamentoAtivo: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const itemExists = state.items.some(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.items.push(action.payload);
      } else {
        alert("Este prato já está no carrinho!");
      }
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
      state.entregaAtiva = false;
      state.pagamentoAtivo = false;
    },
    continuarEntrega: (state) => {
      state.isOpen = false;
      state.entregaAtiva = true;
    },
    voltarParaEntrega: (state) => {
      state.pagamentoAtivo = false;
      state.entregaAtiva = true;
    },
    voltarCarrinho: (state) => {
      state.entregaAtiva = false;
      state.isOpen = true;
    },
    continuarPagamento: (state) => {
      state.entregaAtiva = false;
      state.pagamentoAtivo = true;
    },
  },
});

export const {
  add,
  remove,
  open,
  close,
  continuarEntrega,
  voltarParaEntrega,
  voltarCarrinho,
  continuarPagamento,
} = cartSlice.actions;

export default cartSlice.reducer;
