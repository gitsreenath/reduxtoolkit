import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "../features/CartSlice";
import { getProducts } from "../features/ProductSlice";
import { useSelector } from "react-redux";
import StatusError from "../utlil/ErrorCodes";

const Product = () => {
  const dispatch = useDispatch();
  const {data:productsall,status}=useSelector(state=>state.products)
  // const [products, setproducts] = useState([]);


  useEffect(() => {

dispatch(getProducts())

  }, []);

  if(status===StatusError.LOADING){
    return <p>Loading.....</p>
  }
  if(status===StatusError.ERROR){
    return <p>Loading.....</p>
  }

  // console.log("alldata",productsall); 

  const card = productsall.map((items) => (
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
          <Button onClick={() => addtoCart(items)} variant="primary">
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  const addtoCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="row ">
      <h2>PRODUCTS</h2>
      {card}
    </div>
  );
};

export default Product;
