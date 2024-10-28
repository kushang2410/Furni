import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/productSlice';

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products)

  return (
    <>
      <section>
        {/* Start Hero Section */}
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>Shop</h1>
                </div>
              </div>
              <div className="col-lg-7">
              </div>
            </div>
          </div>
        </div>
        {/* End Hero Section */}
        <div className="untree_co-section product-section before-footer-section">
          <div className="container">
            <div className="row">
              {
                products.map((val,index) => (
                  <div key={val+index} className="col-12 col-md-4 col-lg-3 mb-5" onClick={() => dispatch(addToCart(val))}>
                    <a className="product-item">
                      <img src={val.image} className="product-thumbnail" height="180px" style={ {objectFit:'contain'}} />
                      <h3 className="product-title">{val.title}</h3>
                      <strong className="product-price">${val.price}</strong>
                      <span className="icon-cross">
                        <img src="images/cross.svg" className="img-fluid" />
                      </span>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
