import React from "react";

const Content = ({ images }) => {
  return (
    <div className="card">
      <div className="row">
        {images.map((image) => {
          return (
            <div className="col-md-3 mt-5" key={image.id}>
              <div className="card cardDetail" style={{ width: "17.5rem" }}>
                <img
                  src={image.img}
                  className="card-img-top"
                  alt={image.title}
                />

                <div className="card-body">
                  <h5 className="card-title">{image.title}</h5>
                </div>

                <a href={image.img} className="btn btn-primary" download>
                  Download
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
