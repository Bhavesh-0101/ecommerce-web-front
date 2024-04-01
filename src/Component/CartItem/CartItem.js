import { Button } from "@material-ui/core";


const CartItem = (props) => {
    const { item, addToCart, removeFromCart } = props
  return (
    <div>
      <div>
        <h3>{item?.title}</h3>
        <div className="information">
          <p>Price: ${item?.price}</p>
          <p>Total: ${(item?.count * item.price).toFixed(2)}</p>
          <p>Description: ${item?.description}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item._id)}
          >
            -
          </Button>
          <p>{item.count}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      {/* <img src={item.image} alt={item.title} /> */}
    </div>
  );
};

export default CartItem;
