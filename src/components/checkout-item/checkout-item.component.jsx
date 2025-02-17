import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  DefaultContainer,
  QuantityContainer,
  RemoveItem,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const handleClearItem = () => clearItemFromCart(cartItem);
  const handleAddItem = () => addItemToCart(cartItem);
  const handleRemoveItem = () => removeItemFromCart(cartItem);

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
