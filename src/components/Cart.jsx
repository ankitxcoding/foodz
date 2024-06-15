import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemsList";
import { clearCart } from "../store/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="w-1/2 m-auto">
      <h1 className="m-4 text-5xl font-bold text-center">Cart</h1>
      <CartItemList items={cartItems} />
      <div className="flex justify-center">
        {cartItems.length === 0 ? (
          <p className="text-center text-xl font-semibold">
            Your cart is empty, please add items to your cart.
          </p>
        ) : (
          <button
            onClick={() => dispatch(clearCart())}
            className="m-4 px-2 py-1 border border-black bg-black text-white rounded-md text-xl"
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};
export default Cart;
