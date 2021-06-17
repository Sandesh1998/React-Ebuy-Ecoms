import React from 'react';
import CollectionPreview from '../../Components/collection-preview/collection-preview.components.jsx';


import SHOP_DATA from "./shop.data.js";


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }
    render() {
        const {collections }= this.state;
        return (<div className='shop-page'>
            {
                collections.map(({ id, ...otheCollectionProps} )=> (
                    <CollectionPreview key={id} { ...otheCollectionProps } />
                ))
            }
        </div>

        );
    }
};

export default ShopPage;
