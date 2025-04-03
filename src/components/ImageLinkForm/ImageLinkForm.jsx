import React from "react"
import "./ImageLinkForm.css"

const ImageLinkForm = () => {
  return (
    <>
      <p className="f3 center">
        {'This Smart Brain will detect faces in the pictures Give it a try:'}
      </p>
      <div className="center">
        <div className="pa4 br3 shadow-5 form center">
          <input className="f4 w-70 center" type="text" />
          <button className="w-30 grow f4 link pv2 dib white bg-light-blue">Detect</button>
        </div>
      </div>
    </>
  )
}

export default ImageLinkForm
