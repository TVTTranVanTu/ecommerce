import React from 'react';

function CategoryItem(props) {
    const { item } = props;

    return (
        <div className="home-category-list__group">
            <a href="#" className="home-category-list__category-grid">
                <div className="content">
                    <div className="image">
                        <img src={item.image}></img>
                    </div>
                    <div className="title">
                        <div className="name">{item.name}</div>
                    </div>
                </div>

            </a>

        </div>
    );
}

export default CategoryItem;