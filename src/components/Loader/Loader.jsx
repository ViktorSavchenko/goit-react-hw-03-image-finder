import React from "react";
import { RotatingLines } from 'react-loader-spinner'
import './Loader.css'

function Loader() {
  return (
    <div className="Loader-wrapper">
      <RotatingLines
        wrapperClass="Loader"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </div>
  );
};

export default Loader