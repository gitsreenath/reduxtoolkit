import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { remove } from "../features/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  const card = cartProducts.map((items) => (
    <div key={items.id} className="col-md-3 my-2   ">
      <Card style={{ width: "18rem" }}>
        <div className="text-center py-2">
          <Card.Img
            variant="top"
            src={items.image}
            style={{ width: "5rem", height: "5rem" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{items.title}</Card.Title>
          <Card.Text>Rs.{items.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => removeCart(items.id)} variant="primary">
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  const removeCart = (product_id) => {
    dispatch(remove(product_id));
  };
  return (
    <>
      <div className="row">
        <h2>Your cart is here</h2>
        {card}
      </div>
    </>
  );
};

export default Cart;
