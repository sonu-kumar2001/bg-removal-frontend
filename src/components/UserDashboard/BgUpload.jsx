import React, { useState } from "react";
import removeBg from "../../api/bgRemove";
import { formHeader } from "../../api/auth";
import { saveAs } from "file-saver";

export default function BgUpload() {
  const [uploadImage, setUploadImage] = useState(null);
  const [originalImage, setOriginalImage] = useState("");
  const [transparentImage, setTransparentImage] = useState("");
  const [loading, setLoading] = useState(false);
  const newTransparentUrl = transparentImage.replace("./", "");
  const downloadFileName = transparentImage.replace("./public/nobg/", "");

  const onUploadImage = (event) => {
    setUploadImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("bgremove", uploadImage);
      if (uploadImage != null) {
        setLoading(true);
        const response = await removeBg(formData);
        if (response) {
          setOriginalImage(response.data.originalImg);
          setTransparentImage(response.data.bgRemove);
        }
        formHeader();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const downloadImage = () => {
    saveAs(`http://localhost:4000/${newTransparentUrl}`, downloadFileName);
  };

  const closeHandler = () => {
    setUploadImage(null);
    setOriginalImage("");
    setTransparentImage("");
  };
  return (
    <>
      {originalImage && transparentImage ? (
        <div className="result-image">
          <div className="close-icon">
            <i onClick={closeHandler} className="ri-close-circle-line"></i>
          </div>
          <div className="flex-between">
            <div className="original-image">
              <img
                src={`http://localhost:4000/${originalImage}`}
                alt="original"
              />
              <p>Original Image</p>
            </div>
            <div className="transparent-image">
              <img
                src={`http://localhost:4000/${newTransparentUrl}`}
                alt="transparent"
              />
              <p>Transparent Image</p>
            </div>
          </div>
          <button onClick={downloadImage}>Download</button>
        </div>
      ) : (
        <div className="remove-bg-tab">
          <form onSubmit={handleSubmit}>
            <label className="custom-file-upload">
              <input type="file" name="image" onChange={onUploadImage} />
            </label>
            <button type="submit" disabled={loading}>
              <i className="ri-upload-2-line"></i>
              {loading ? "uploading.." : "upload image"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
