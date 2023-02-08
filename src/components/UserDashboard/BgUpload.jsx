import React, { useState } from "react";
import removeBg from "../../api/bgRemove";
import { formHeader } from "../../api/auth";

export default function BgUpload() {
  const [uploadImage, setUploadImage] = useState(null);
  const [originalImage, setOriginalImage] = useState("");
  const [transparentImage, setTransparentImage] = useState("");
  const newTransparentUrl = transparentImage.replace("./", "");

  console.log(originalImage, newTransparentUrl);

  const onUploadImage = (event) => {
    setUploadImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("bgremove", uploadImage);
      const response = await removeBg(formData);

      if (response) {
        setOriginalImage(response.data.originalImg);
        setTransparentImage(response.data.bgRemove);
      }
      formHeader();
    } catch {}
  };
  return (
    <>
      <div className="remove-bg-tab">
        <form onSubmit={handleSubmit}>
          <label className="custom-file-upload">
            <input type="file" name="image" onChange={onUploadImage} />
          </label>
          <button>Upload Image</button>
        </form>
      </div>

      <div className="result-image flex">
        <div className="original-image">
          <img src={`http://localhost:4000/${originalImage}`} alt="original" />
        </div>
        <div className="transparent-image">
          <img
            src={`http://localhost:4000/${newTransparentUrl}`}
            alt="transparent"
          />
        </div>
      </div>
    </>
  );
}
