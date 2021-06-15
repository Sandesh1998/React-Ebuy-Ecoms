import React from 'react';
import { withRouter } from 'react-router-dom';

import "./menu-item.styles.scss"

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    // instead of writing props we will pass as {title} inside the arrowback function to make dynamic 
    <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}

        />

        <div className='content'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className='sub-title'>SHOP NOW</span>
        </div>
    </div>
);
export default withRouter (MenuItem);