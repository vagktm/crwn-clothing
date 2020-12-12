import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    //{console.log(this.state.collections[0].title)}
    return (
      <div className="shop-page">
        {this.state.collections.map(({id,...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
      </div>
    );
  }
}

export default ShopPage;
