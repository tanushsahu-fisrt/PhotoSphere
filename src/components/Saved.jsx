import React, { useState } from 'react';
import Loader from './Loader';
import { AiOutlineDelete } from "react-icons/ai";

const Saved = ({ saved, loader, removeSavedImage }) => {
  return (
    <>
      <div className="container-fluid text-center" id="top">
        {loader || saved.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="flex">
              {saved.map((image) => (
                <div key={image.id} className="items">
                  <img src={image.src.medium} alt={image.photographer} />
                  <button 
                    onClick={() => removeSavedImage(image.id)}
                    className="btn btn-danger mt-2"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
        
        {saved.length !== 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back To Top
          </a>
        )}
      </div>
    </>
  );
}

export default Saved;