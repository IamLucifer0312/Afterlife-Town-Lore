import React, { useState, useEffect } from "react";
import "././style/card.css";

const GetStory = ({ userId }) => {
  const [stories, setStories] = useState([]);

  const newStory = {
    title: "The New Story",
    content: "This is the new story content",
    imageName: "new-story.jpg",
    game: "New Game",
  };
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

  const hasStory = stories.some((story) => story.title === newStory.title);
  if (!hasStory) {
    stories.push(newStory);
  }
};

export default GetStory;
