import React from "react";
import "././style/card.css";

const Slider = () => {
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
        <div className="item active">
          <img src="././images/image1.jpg"></img>
          <div className="content">
            <p>design</p>
            <h2>Slider 1</h2>
            <p>Lorem ipsun dolo dasdasdasdas</p>
          </div>
        </div>

        <div className="item">
          <img src="././images/image2.png"></img>
          <div className="content">
            <p>design</p>
            <h2>Slider 1</h2>
            <p>Lorem ipsun dolo dasdasdasdas</p>
          </div>
        </div>

        <div className="item">
          <img src="././images/image1.jpg"></img>
          <div className="content">
            <p>design</p>
            <h2>Slider 1</h2>
            <p>Lorem ipsun dolo dasdasdasdas</p>
          </div>
        </div>

        <div className="item">
          <img src="././images/image1.jpg"></img>
          <div className="content">
            <p>design</p>
            <h2>Slider 1</h2>
            <p>Lorem ipsun dolo dasdasdasdas</p>
          </div>
        </div>

        <div className="item">
          <img src="././images/image1.jpg"></img>
          <div className="content">
            <p>design</p>
            <h2>Slider 1</h2>
            <p>Lorem ipsun dolo dasdasdasdas</p>
          </div>
        </div>
      </div>
      <div className="thumbnail">
        <div className="item active">
          <img src="././images/image1.jpg"></img>
          <div className="content">Name Slider</div>
        </div>
        <div className="item">
          <img src="././images/image2.png"></img>
          <div className="content">Name Slider</div>
        </div>
        <div className="item">
          <img src="././images/image1.jpg"></img>
          <div className="content">Name Slider</div>
        </div>
        <div className="item">
          <img src="././images/image1.jpg"></img>
          <div className="content">Name Slider</div>
        </div>
        <div className="item">
          <img src="././images/image1.jpg"></img>
          <div className="content">Name Slider</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
