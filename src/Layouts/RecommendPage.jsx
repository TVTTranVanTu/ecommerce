import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listRecommendProducts } from "../Actions/RecommendProductsAction";
import Pagination from "../Components/filterProduct/Pagination";
import Product from "../Components/product/Product";

function RecommendPage(props) {
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
    page: 1,
  });
  function handlePageChange(newPage) {
    setParams({ ...params, page: newPage });
  }
  useEffect(() => {
    if (userInfo) {
      setId(userInfo.userDto.id);
      dispatch(listRecommendProducts(id, params));
    }
  }, [dispatch, id, params]);
  return (
    <div className="page-recommend container">
      <div class="label-page-header">
        <h1 class="label-page-header__label">Tất cả</h1>
        <hr class="label-page-header__dotted-line" />
      </div>
      {loading ? (
        ""
      ) : error ? (
        ""
      ) : (
        <div className="list-product__recommend">
          {recommendProducts.items.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      )}
      <Pagination
        pagination={recommendProducts.pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default RecommendPage;
