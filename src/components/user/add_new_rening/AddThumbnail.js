import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

export class AddThumbnail extends Component {
  state = {
    profileImage:
      "https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png",
  };

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImage: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { profileImage } = this.state;

    return (
      <div className="container">
        <div className="label  form-control">
          <label htmlFor="input" className="image-upload">
            <div className="img-holder">
              <div className="label mb-2">
                <label htmlFor="input">
                  <FaPlus />
                  &nbsp; Please add a portrait image
                </label>
              </div>
              <img
                src={profileImage}
                alt=""
                id="img"
                className="thumbnail-image"
              />
            </div>
            <input
              type="file"
              name="image-upload"
              id="input"
              accept="image/*"
              onChange={this.imageHandler}
              className="thumbnail-input"
            />
          </label>
        </div>
      </div>
    );
  }
}

export default AddThumbnail;
