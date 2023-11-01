import React from 'react'
import BreadCumb from '../Components/BreadCumb';

export default function Cart() {
  return (
    <>
      <BreadCumb title=" Cart " />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex justify-content-between align-items-center">
                <h4 className='cart-col-1'>Price</h4>
                <h4 className='cart-col-2'>Product</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4'>Total</h4>
              </div>
            </div>
            <div className="cart-data py-3 d-flex justify-content-between">
              <div className='cart-col-1'></div>
              <div className='cart-col-2'></div>
              <div className='cart-col-3'></div>
              <div className='cart-col-4'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
