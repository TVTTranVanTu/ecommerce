import React from "react";
import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { item } = props;
  let link;
  if (item.categoryName != null) {
    link = item.categoryName.replace(/\s/g, "-") + ".cat" + item.id;
    console.log(link);
  }
  return (
    <div className="home-category-list__group">
      <Link to={link} className="home-category-list__category-grid">
        <div className="content">
          <div className="image">
            <img src={item.categoryThumbnail} alt=""></img>
          </div>
          <div className="title">
            <div className="name">{item.categoryName}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryItem;
