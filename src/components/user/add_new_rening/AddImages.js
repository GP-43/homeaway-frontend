import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const AddImages = ({setSelectedFiles}) => {
  const [selectedImages, setSelectedImages] = useState([]);
 
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setSelectedFiles(selectedFilesArray);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  return (
    <div className="container">
      <div className="img-holder form-control">
        <label>
          Please add atleast 4 landscape images. Make sure to add a <b>360 degree</b> view of the place &nbsp;
          <FaPlus />
          <input
            type="file"
            name="images"
            onChange={onSelectFile}
            multiple
            accept="image/png, image/jpeg, image/webp"
          />
        </label>
        <br />

        {selectedImages.length > 0 &&
          (selectedImages.length > 10 ? (
            <p className="error">
              You can't upload more than 10 images! <br />
              <span>
                please delete <b> {selectedImages.length - 10} </b> of them{" "}
              </span>
            </p>
          ) : (
            <button
              className="upload-btn"
              onClick={() => {
                console.log("UPLOAD IMAGES");
              }}
            >
              UPLOADED {selectedImages.length} IMAGE
              {selectedImages.length === 1 ? "" : "S"}
            </button>
          ))}
        <div className="images">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={image} className="image">
                  <img src={image} height="200" alt="upload" />
                  <button
                    onClick={() =>
                      setSelectedImages(
                        selectedImages.filter((e) => e !== image)
                      )
                    }
                  >
                    <FaTrashAlt className="trash mb-2 mt-2" />
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AddImages;
