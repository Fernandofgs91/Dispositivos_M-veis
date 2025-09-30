// Exemplo básico
import { cartReducer } from "./CartContext";

describe("cartReducer", () => {
  it("adiciona item novo", () => {
    const state = { items: [] };
    const action = { type: "ADD_ITEM", payload: { id: "p1", name: "P1", price: 10 } };
    const next = cartReducer(state, action);
    expect(next.items.length).toBe(1);
    expect(next.items[0].qty).toBe(1);
  });
});
