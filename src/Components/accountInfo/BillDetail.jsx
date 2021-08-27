import React, { useState } from "react";
import BillItem from "./BillItem";

function BillDetail(props) {
  const { orders } = props;

  return (
    <div>
      {orders ? (
        <div>
          <div className="order-list">
            <div className="order-list-header">
              <div className="items">
                <div className="item">
                  <span className="item-product">Sản phẩm</span>
                  <span className="element item-price">Giá</span>
                  <span className="element item-quantity">Số lượng</span>
                  <span className="element item-status">Trạng thái</span>
                </div>
              </div>
              <span className="element item-total">Tổng giá</span>
              <span className="element item-name">Người đặt</span>
              <span className="element item-phonenumber">Số điện thọai</span>
            </div>
            <div>
              {orders.map((order, index) => (
                <BillItem key={index} order={order} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="order_no-result">
            <div className="noresult_content">
              <div className="noresult_image"></div>
              <div className="noresult_title">Chưa có đơn hàng</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BillDetail;
