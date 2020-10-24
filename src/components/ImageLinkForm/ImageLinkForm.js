import React from "react";
import "./ImageLinkForm";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f4">
        {"Si Pintar akan mendeteksi wajah. Silahkan masukkan gambar"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5 pattern-zigzag-sm yellow bg-yellow">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            onChange={onInputChange}
          ></input>
          <button
            className="w-30 grow f5 link ph3 pv2 dib white bg-light-purple"
            onClick={onSubmit}
          >
            Deteksi
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
