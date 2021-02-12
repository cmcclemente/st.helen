import React from "react";
import axios from "axios";

import ProductContainer from "./ProductContainer";

class ProductProvider extends React.Component {
  // workitem accept some range or filters for events to retrieve
  state = {
    products: [],
    loading: true,
    error: null,
  };

  renderLoading() {
    // workitem style loading banner
    return <div>Loading ...</div>;
  }

  renderError() {
    // workitem style error element and offer reload action...?
    return <div>Whoops, something went wrong! Reload</div>;
  }

  renderProducts() {
    return <ProductContainer products={this.state.products} />;
  }

  componentDidMount() {
    console.log("[ProductProvider] componentDidMount, great for making the first network calls");

    const requestConfig = {
      url: "http://localhost:5000/api/v1/products",
      method: "get",
      headers: { "Content-Type": "application/json" },
    };

      
    axios(requestConfig)
      .then((response) => {
        console.log("1" + response.data);
        this.setState({
          products: response.data,
          loading: false,
        });
        console.log("2"+this.state.products);
      })
      .catch((err) => {
        this.setState({
          error: err,
          loading: false,
        });
      });
  }

  componentDidUpdate() {
    console.log("[ProductProvider] componentDidUpdate, great for updating after state changes");
  }

  componentWillUnmount() {
    console.log("[ProductProvider] componentWillUnmount, great for cleaning up after a component");
  }

  render() {
      console.log("3" + this.state.products.length)
    if (this.state.loading) {
        console.log("in loading");
      return this.renderLoading();
    } else if (this.state.products.length > 0) {
        console.log("length >0 render");
      return this.renderProducts();
    } else {
      return this.renderError();
    }
  }
}

export default ProductProvider;