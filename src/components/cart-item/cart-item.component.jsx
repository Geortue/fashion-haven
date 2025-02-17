import {
  CartItemContainer,
  CartItemImage,
  CartItemName,
  CartItemPrice,
  ItemDetailsContainer,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetailsContainer>
        <CartItemName>{name}</CartItemName>
        <CartItemPrice>
          {quantity} x ${price}
        </CartItemPrice>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
