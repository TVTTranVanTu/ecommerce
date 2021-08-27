import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductSearch } from "../Actions/SearchProductAction";
import Pagination from "../Components/filterProduct/Pagination";
import Product from "../Components/product/Product";

function ProductFromSearch(props) {
  const dispatch = useDispatch();
  const keyword = props.match.params.name;
  const [params, setParams] = useState({
    limit: 20,
    page: 0,
  });
  function handlePageChange(newPage) {
    setParams({ ...params, page: newPage });
  }
  const listProductsSearch = useSelector((state) => state.listProductsSearch);
  const { loading, error, data } = listProductsSearch;
  useEffect(() => {
    dispatch(listProductSearch(keyword, params));
  }, [dispatch, params, keyword]);
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
        <div>
          <div className="list-product__recommend">
            {data.items.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
          <Pagination
            pagination={data.pagination}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default ProductFromSearch;
