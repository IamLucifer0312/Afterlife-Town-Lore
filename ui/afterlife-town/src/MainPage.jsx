import React, { useState, useEffect } from "react";
import Slider from "./components/Slider";

const MainPage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async ({ userId }) => {
      try {
        const response = await fetch(
          "https://afterlife-town-lore.onrender.com/users/" + userId
        );
        const data = await response.json();
        console.log(data.stories);
        setStories(data.stories);
      } catch (error) {
        console.error("Error fetching stories: ", error);
      }
    };
    fetchStories({ userId: "671380c7735f09a4ddcbe906" });
  }, []);
  return <Slider stories={stories} />;
};

export default MainPage;
