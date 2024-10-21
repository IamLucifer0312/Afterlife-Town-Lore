import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "././style/card.css";

const GetStory = () => {
  const [oldStories, setOldStories] = useState([]);
  const { userId, storyNo } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Loading state

  const newStories = [
    {
      title: "The 1st Story",
      content: "This is the 1st story content",
      imageName: "image1.jpg",
      game: "Game 1",
    },
    {
      title: "The 2nd Story",
      content: "This is the 2nd story content",
      imageName: "image2.png",
      game: "Game 2",
    },
    {
      title: "The 3rd Story",
      content: "This is the new story content",
      imageName: "image2.png",
      game: "New Game",
    },
  ];

  const fetchStories = async ({ userId }) => {
    try {
      const response = await fetch(
        "https://afterlife-town-lore.onrender.com/users/" + userId
      );
      const data = await response.json();
      console.log(data.stories);
      setOldStories(data.stories);
    } catch (error) {
      console.error("Error fetching stories: ", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const updateUserStories = async () => {
    const newStory = newStories[storyNo - 1];
    try {
      const response = await fetch(
        "https://afterlife-town-lore.onrender.com/users/" + userId,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ stories: [...oldStories, newStory] }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("User stories updated successfully:", data);
      } else {
        console.error("Failed to update stories:", data.message);
      }
    } catch (error) {
      console.error("Error updating stories:", error);
    } finally {
      navigate("/main-page/" + userId);
    }
  };

  useEffect(() => {
    fetchStories({ userId: userId });
  }, []);

  useEffect(() => {
    if (!loading) {
      const hasStory = oldStories.some(
        (story) => story.title == newStories[storyNo - 1].title
      );
      console.log("Has story:", hasStory);
      if (!hasStory) {
        updateUserStories();
      } else {
        console.log("Story already exists");
        navigate("/main-page/" + userId);
      }
    }
  }, [oldStories, loading]);
};

export default GetStory;
