import React, { useState, useContext, useEffect } from "react";
import "./ImageGrid.css";
import axios from "axios";
import { QueryContext } from "../util/context/QueryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

const ImageGrid = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useContext(QueryContext);

  const url = `https://api.unsplash.com/search/photos?page=6&query=${query}&client_id=WSASgNm1Yl2KbGQ_omjUI-nt-xGoxBjnuTflLhTsDH4`;

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(url)
        .then((response) => {
          setPhotos(response.data.results);
          document.getElementById("loadingSection").style.display = "none";
          document.getElementById("imagesSection").style.display = "block";
        })
        .catch((error) => {
          console.log(error);
          document.getElementById("imagesSection").style.display = "none";
          document.getElementById("loadingSection").style.display = "block";
        });
    };
    getData();
  }, [query, url]);

  useEffect(() => {
    if (query !== "") {
      document.getElementById("loadingSection").style.display = "block";
      document.getElementById("imagesSection").style.display = "none";
    }
  }, [query]);

  return (
    <div className="imageGrid">
      <section id="loadingSection" className="loadingSection">
        <div className="loader"></div>
        <h6 className="loadingText">Please wait...</h6>
      </section>
      <section id="imagesSection" className="imagesSection">
        {photos.map((photo) => {
          console.log(photo);
          return (
            <div className="imageContainer" key={photo.id}>
              <div className="imageTitle">
                <div className="avatar">
                  <img src={photo.user.profile_image.small} alt="" />
                </div>
                <h5>{photo.user.name}</h5>
              </div>
              <div
                className="imageView"
                style={{ backgroundColor: photo.color }}
              >
                <img src={photo.urls.full} alt="" />
              </div>
              <div className="imageButtons">
                <a
                  href={photo.urls.full}
                  download
                  className="imageButton downloadButton"
                >
                  <FontAwesomeIcon
                    className="imageButtonIcon"
                    icon={faSearchPlus}
                  />
                  <h6>Full Sized Image</h6>
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ImageGrid;
