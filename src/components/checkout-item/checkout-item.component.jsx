import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  DefaultContainer,
  QuantityContainer,
  RemoveItem,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleClearItem = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const handleRemoveItem = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <DefaultContainer>{name}</DefaultContainer>
      <QuantityContainer>
        <div className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </QuantityContainer>
      <DefaultContainer>{price}</DefaultContainer>
      <RemoveItem onClick={handleClearItem}>&#10005;</RemoveItem>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
