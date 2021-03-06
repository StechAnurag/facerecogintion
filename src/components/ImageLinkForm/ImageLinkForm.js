import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onBtnSubmit }) => {
  return (
    <div>
      <p className="f3">{"This App detects faces in your picture: "}</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 f4 link ph3 pv2 dib black b detectBtn"
            onClick={onBtnSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
