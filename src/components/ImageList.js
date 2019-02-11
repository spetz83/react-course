import React, { Component } from "react";

class ImageList extends Component {
  render() {
    const images = this.props.images.map(({ description, id, urls }) => {
      return <img key={id} src={urls.regular} alt={description} />;
    });

    return <div>{images}</div>;
  }
}

export default ImageList;
