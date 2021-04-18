import React from 'react';

function CheckoutSteps(props) {
    return (
        <div className="checkout__steps">
            <div className={props.step1 ? 'step active' : 'step'}>
                Shopee
            <i className="fas fa-angle-double-right"></i></div>
            <div className={props.step2 ? 'step active' : 'step'}>
                Shipping
                <i className="fas fa-angle-double-right"></i></div>
            <div className={props.step3 ? 'step active' : 'step'}>
                Payment
                <i className="fas fa-angle-double-right"></i></div>
            <div className={props.step4 ? 'step active' : 'step'}>
                Place-Order
                </div>
        </div>
    );
}

export default CheckoutSteps;