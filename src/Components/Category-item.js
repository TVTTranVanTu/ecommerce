import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem(props) {
    const { item } = props;
    let link = item.name.replace(/\s/g, '-') + "/" + item.id;
    return (
        <div className="home-category-list__group">
            <Link to={link} className="home-category-list__category-grid">
                <div className="content">
                    <div className="image">
                        <img src={item.thumbnail}></img>
                    </div>
                    <div className="title">
                        <div className="name">{item.name}</div>
                    </div>
                </div>

            </Link>

        </div>
    );
}

export default CategoryItem;