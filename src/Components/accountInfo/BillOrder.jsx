import React from "react";

function BillOrder(props) {
  return (
    <div className="bill_order">
      <div className="order_content">
        <div className="order_status">
          <a className="status active" href="/user/purchase?type=6">
            <span className="status_name">Tất cả</span>
          </a>
          <a className="status" href="/user/purchase?type=9">
            <span className="status_name">Chờ xác nhận</span>
          </a>
          <a className="status" href="/user/purchase?type=7">
            <span className="status_name">Chờ lấy hàng</span>
          </a>
          <a className="status" href="/user/purchase?type=8">
            <span className="status_name">Đang giao</span>
          </a>
          <a className="status" href="/user/purchase?type=3">
            <span className="status_name">Đã giao</span>
          </a>
          <a className="status" href="/user/purchase?type=4">
            <span className="status_name">Đã Hủy</span>
          </a>
        </div>
        <div className="search_input">
          <svg width="19px" height="19px" viewBox="0 0 19 19">
            <g id="Search-New" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                id="my-purchase-copy-27"
                transform="translate(-399.000000, -221.000000)"
                strokeWidth="2"
              >
                <g id="Group-32" transform="translate(400.000000, 222.000000)">
                  <circle id="Oval-27" cx="7" cy="7" r="7"></circle>
                  <path
                    d="M12,12 L16.9799555,16.919354"
                    id="Path-184"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <input
            autocomplete="off"
            placeholder="Tìm kiếm theo Tên Shop, ID đơn hàng hoặc Tên Sản phẩm"
            value=""
          />
        </div>
        <div className="order_no-result">
          <div className="noresult_content">
            <div className="noresult_image"></div>
            <div className="noresult_title">Chưa có đơn hàng</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillOrder;
