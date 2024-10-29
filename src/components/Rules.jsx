import React, { useState, useEffect } from "react";
import "././style/card.css";

const Rules = ({ stories }) => {
  let items = document.querySelectorAll(".slider .item");
  let thumbnails = document.querySelectorAll(".thumbnail .item");

  // config params
  let countItem = items.length;
  const [itemActive, setItemActive] = useState(0);

  useEffect(() => {
    if (items.length && thumbnails.length) {
      showSlider();
    }
  }, [itemActive]);

  const showSlider = () => {
    // remove old active items
    let oldActiveItem = document.querySelector(".slider .list .item.active");
    let oldActiveThumbnail = document.querySelector(".thumbnail .item.active");
    oldActiveItem.classList.remove("active");
    oldActiveThumbnail.classList.remove("active");

    // add new active items
    items[itemActive].classList.add("active");
    thumbnails[itemActive].classList.add("active");
  };

  // click thumbnail
  const handleThumbnailClick = (index) => {
    setItemActive(index); // Update the active index based on thumbnail click
  };

  return (
    <div className="slider">
      <div className="list">
        {stories.map((story, index) => (
          <div key={story._id} className={`item ${index == 0 ? "active" : ""}`}>
            <img src={`/images/${story.imageName}`} alt={story.title} />
            <div className="content">
              <p>{story.game}</p>
              <h2>{story.title}</h2>
              <p>{story.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {stories.map((story, index) => (
          <div
            key={story._id}
            className={`item ${index == 0 ? "active" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={`/images/${story.imageName}`} alt={story.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;
