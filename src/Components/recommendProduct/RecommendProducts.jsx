import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listRecommendProducts } from "../../Actions/RecommendProductsAction";
import Product from "../product/Product";

function RecommendProducts(props) {
  const [id, setId] = useState("1");
  const dispatch = useDispatch();
  const recommendProductsList = useSelector(
    (state) => state.recommendProductsList
  );
  const { loading, error, recommendProducts } = recommendProductsList;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [params, setParams] = useState({
    limit: 12,
    page: 0,
  });

  useEffect(() => {
    if (userInfo) {
      setId(userInfo.userDto.id);
      dispatch(listRecommendProducts(id, params));
    } else {
      dispatch(listRecommendProducts(1, params));
    }
  }, [dispatch, id]);
  return (
    <div className="recommend-products-wrapper">
      <div className="container">
        <div>
          <div className="recommend-title">
            <h1>Gợi ý hôm nay</h1>
          </div>
          {loading ? (
            ""
          ) : error ? (
            ""
          ) : (
            <div className="stardust-tabs-panels">
              {recommendProducts.items.map((item) => (
                <Product key={item.id} item={item} />
              ))}
              <div className="_3BrES5">
                <Link
                  className="btn btn-light btn--m btn--inline btn-light--link _3PNTgJ"
                  to="/daily_discover"
                >
                  Xem thêm
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecommendProducts;
