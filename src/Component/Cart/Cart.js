import { paymentApi } from "../../services/ApiServices";
import CartItem from "../CartItem/CartItem";
import { Button } from "@material-ui/core";


const Cart = (props) => {
    const { cartItems, addToCart, removeFromCart } = props

    const calculateTotal = (items) => {
        return items.reduce((acc, item) => acc + item.count * item.price, 0);
    }

    const handleAddToPaymentHistory = async (cartItems) => {
        let productsId = [];
        cartItems.forEach(element => {
            productsId.push(element._id)
        });
        const payload = {
            paymentAmount: calculateTotal(cartItems),
            products_id: productsId
        }
        const result = await paymentApi('post', '/api/payment/createPayment', payload);
        if (result) {
            console.log("Payment added successfully");
        }
    }

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems?.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems?.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: ${calculateTotal(cartItems)}</h2>
            <Button onClick={() => handleAddToPaymentHistory(cartItems)}>Add Payment</Button>
        </div>
    );
};

export default Cart;
