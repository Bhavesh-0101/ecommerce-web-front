import { Button } from "@material-ui/core";
import './ProductItem.css'

const ProductItem = (props) => {
    const { item, handleAddToCart } = props

    return (
        <div className="container">
            {/* <img src={item.image} alt={item.title} /> */}
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <Button className="addtocart" onClick={() => handleAddToCart(item)}>Add to cart</Button>
        </div>
    );
};

export default ProductItem;
