import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItem
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItem) =>
    cartItem.reduce(
      (accumulatedQty, cartItm) => accumulatedQty + cartItm.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItem) =>
  cartItem.reduce(
    (accumulatedQty, cartItm) => accumulatedQty + cartItm.quantity * cartItm.price,
    0
  )
)