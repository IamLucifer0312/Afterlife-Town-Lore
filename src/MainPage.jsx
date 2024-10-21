import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "./components/Slider";

const MainPage = () => {
  const [stories, setStories] = useState([]);
  const { userId } = useParams();

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
    console.log(userId);
    fetchStories({ userId: userId });
  }, []);
  return <Slider stories={stories} />;
};

export default MainPage;
