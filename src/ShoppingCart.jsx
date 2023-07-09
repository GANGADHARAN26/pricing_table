/* eslint-disable no-undef */
import React, { useState } from "react";

const ShoppingCart = ({id, title, image, price, mutedPrice, rating, badge ,addCount,removeCount}) => {
  //properties => title, image, price
  /*
      
    */
  //addTOcart to removetocart button functionality
  const [addToCart, setToCart] = useState(false);
  const handleCart=()=>{
    if(addToCart)
    {
        removeCount(title);
         setToCart(false);
    }
    else
    {
        addCount(title);
         setToCart(true);
    }
   //counting the cart items functionality

  }
  return (
    <section>
      <div className="card  " style={{ width: "222px", height: "320px" }}>
        {badge ? (
          <div className="badge bg-dark text-white position-absolute " id="bageSale">  Sale</div>) : (  <div></div>)}
          <div className="card-img-top ">
          <img src={image} alt={title} className={StyleSheet.image} style={{ width: "222px", height: "140px" }}></img>
          </div>
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            {rating ? (
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="fa-solid fa-star"></div>
                <div className="fa-solid fa-star"></div>
                <div className="fa-solid fa-star"></div>
                <div className="fa-solid fa-star"></div>
                <div className="fa-solid fa-star"></div>
              </div>
            ) : (
              <div></div>
            )}
            <span className="text-muted text-decoration-line-through">
              {mutedPrice}
            </span>
            &nbsp;{price}
          </div>
        </div>
        <div className="card-footer">
          <div className="text-center">
            <a className="btn btn-outline-dark " onClick={()=>handleCart()}>
              {addToCart? <span>Remove cart</span> : <span>Add to cart</span>}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShoppingCart;
