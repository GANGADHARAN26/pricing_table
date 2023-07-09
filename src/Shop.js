import React from "react";

function Shop({Count}){
   


    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="_blank" id='start'>Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="_blank">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="_blank">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="_#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pricing</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="_blank">All Products</a></li>
                  <hr/>
                  <li><a className="dropdown-item" href="_blank">Popular Items</a></li>
                  <li><a className="dropdown-item" href="_blank">New Arrivals</a></li>

                </ul>
              </li>
             
            </ul>
          </div>
          <button className="btn btn-outline-dark" type="sumit">
          <i class="fa-solid fa-cart-shopping p-lg-1"></i>
          cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">{Count}</span>
          </button>
        </div>
      </nav>
    )
}
 
export default Shop