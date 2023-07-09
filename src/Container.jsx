
import ShoppingCart from './ShoppingCart'
import Shop from "./Shop.json";
import React from "react"
import styleForm from './Card.module.css';
const  Container=({addCount,removeCount})=> {

  return (
        <div className={styleForm.containerS} id='cardstatus'>

            
                 {Shop.map(shop=>(<ShoppingCart
                 key={shop.id}
                 title={shop.title}
                 image={shop.image}
                 price={shop.price}
                 rating={shop.rating}
                 badge={shop.badge}
                 mutedPrice={shop.mutedPrice}
                 addCount={addCount}
                 removeCount={removeCount}
                 />))}
                 
          
                 
        </div>
  );
}

export default Container;
;
/*
    <section className="py-5">
      <div className="container ">
        <div className="row ">
          <div className="col sm-2">
            <div className="card  " style={{ width: "222px", height: "320px" }}>
              <div className="card-img-top ">
                <img
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                  style={{ width: "222px", height: "140px" }}
                ></img>
              </div>
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder"><ShoppingCart title={'Fancy Product'}/></h5>
                  $40.00 - $80.00
                </div>
              </div>
              <div className="card-footer">
                <div className="text-center">
                  <a className="btn btn-outline-dark " href="#">
                    View options
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
   
      </div>
    </section>
    */