import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart.item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropDown = ({ cartItem, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      {cartItem.length ? (
        <div className="cart-items">
          {cartItem.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}

      <CustomButton
        onClick={() => {
          history.push("./checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItem: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
