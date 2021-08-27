import React from 'react';

function PageLayout(props) {
    return (
        <div className="page-layout">
            {props.content}
        </div>
    );
}

export default PageLayout;