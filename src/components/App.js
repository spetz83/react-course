import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID e0cf7f132d1ad66df771df9f4ff62a5be8d123f56ec142dad5ca3afb70f1e98c"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
