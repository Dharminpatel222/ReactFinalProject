import React from 'react'
import BreadCumb from '../Components/BreadCumb';
import watch from "../images/watch.jpg"
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <>
      <BreadCumb title=" Cart " />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
            </div>
            <div className="cart-data py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex align-items-center gap-15">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="" />
                </div>
                <div className="w-75">
                  <h5 className="title">asdjkhakjjkdhsadkj</h5>
                  <p className="color">afdff</p>
                  <p className="size">sfsf</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 100</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-10">
                <div>
                  <input
                    type="number"
                    className="form-control"
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="total-price">$ 100</h5>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className='d-flex justify-content-between align-items-baseline'>
                <Link to="/product" className="button">
                  Continue To Shopping
                </Link>
                <div className='d-flex flex-column align-items-center'>
                    <h4>SubTotal: $ 1000</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/checkout" className='button'>Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
