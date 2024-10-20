import React, { useState } from "react";
import "././style/card.css";

const Slider = ({ stories }) => {
  let items = document.querySelectorAll(".slider .item");
  let thumbnails = document.querySelectorAll(".thumbnail .item");

  // config params
  let countItem = items.length;
  let itemActive = 0;

  function showSlider() {
    // remove old active items
    let oldActiveItem = document.querySelector(".slider .list .item.active");
    let oldActiveThumbnail = document.querySelector(".thumbnail .item.active");
    oldActiveItem.classList.remove("active");
    oldActiveThumbnail.classList.remove("active");

    // add new active items
    items[itemActive].classList.add("active");
    thumbnails[itemActive].classList.add("active");
  }

  // click thumbnail
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      itemActive = index;
      showSlider();
    });
  });

  return (
    <div className="slider">
      <div className="list">
        {stories.map((story, index) => (
          <div
            key={story._id}
            className={`item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={
                `./images/image${index + 1}.jpg`
                  ? `./images/image${index + 1}.jpg`
                  : `./images/image${index + 1}.png`
              }
              alt={story.title}
            />
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
            className={`item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={
                `./images/image${index + 1}.jpg`
                  ? `./images/image${index + 1}.jpg`
                  : `./images/image${index + 1}.png`
              }
              alt={story.title}
            />
            <div className="content">{story.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
