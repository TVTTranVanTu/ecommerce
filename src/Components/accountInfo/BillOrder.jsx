import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderListAction } from "../../Actions/OrderActions";
import BillDetail from "./BillDetail";

function BillOrder(props) {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  useEffect(() => {
    userInfo && dispatch(orderListAction(userInfo.userDto.id));
  }, [dispatch, userInfo]);
  return (
    <div className="bill_order">
      <div className="order_content">
        <div className="order_status">
          <a className="status active" href="/user/purchase?type=6">
            <span className="status_name">Tất cả</span>
          </a>
        </div>
        {loading ? "" : error ? "" : <BillDetail orders={orders} />}
      </div>
    </div>
  );
}

export default BillOrder;
