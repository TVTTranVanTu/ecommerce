import React from "react";

function BillItem(props) {
  const { order } = props;
  console.log(order);
  return (
    <div className="order-result">
      <div className="items">
        {order.itemList.map((item, index) => (
          <div key={index} className={index % 2 === 0 ? "item bt" : "item tp"}>
            <div className=" item-product">{item.productName}</div>
            <div className="element item-price">{item.itemPrice}</div>
            <div className="element item-quantity">{item.qty}</div>
            <div className="element item-status">
              {item.itemStatus === "COMPLETED"
                ? "Đã nhận hàng"
                : item.itemStatus === "AWAITING_FULFILLMENT"
                ? "Chờ xác nhận"
                : item.itemStatus === "AWAITING_SHIPMENT"
                ? "Đang giao hàng"
                : "Đã hủy"}
            </div>
          </div>
        ))}
      </div>
      <div className="element item-total">{order.orderPrice}</div>
      <div className="element item-name">{order.receiverName}</div>
      <div className="element item-phonenumber">{order.phoneNumber}</div>
    </div>
  );
}

export default BillItem;
