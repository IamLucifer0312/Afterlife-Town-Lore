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
      title: "The Sanzu River",
      content:
        "Beneath the ghostly fog shrouding the Sanzu River, monstrous tentacles slithered from the black waters, coiling along the ancient bridge that mortal souls dared to cross. These were not mere creatures, but vengeful spirits bound to the river, waiting to ensnare those cannot release obsessions of their previous life. The tentacles moved silently, their cold grasp curling around, dragging them into the depths where their screams were silenced by the river's cursed waters. In a heartbeat, the bridge would clear, swallowed by mist, leaving only whispers of the tormented souls that drifted downriver, lost in the underworld's shadows, never to find peace, never to be reborn into the afterlife.",
      imageName: "stickycthulhu.png",
      game: "Sticky Cthulhu",
    },
    {
      title: "The Yaoguai's Cave",
      content:
        "It is said that on a certain mountain, there was a cave occupied by yaoguais. They frequently raided villages, amassing countless riches and treasures within the cave. The villages at the foot of the mountain, unable to endure the oppression, formed an elite group of warriors, armed with weapons and enchanted relics, to set out and destroy the demons. However, greed began to stir within them. Along the way, the warriors constantly schemed, each plotting to eliminate the others to claim the treasure for themselves. One by one, they abandoned the mission, until only a single warrior reached the cave. From that moment on, no one ever saw him again.",
      imageName: "dungeonmandom.png",
      game: "Dungeon of Mandom VIII",
    },
    {
      title: "The Three-Life Stone",
      content:
        "At the ancient Three-Life Stone, two souls—once lovers—stood, haunted by unresolved wounds from their past life. As they touched the stone, visions of their love and heartbreak came alive: silent tears, bitter fights, moments of longing that turned to anger. They watched, powerless, as pride and hurt had torn them apart. Finally, overcome with emotion, they turned to each other, voices breaking as they confessed the words they’d buried in life. Forgiveness flooded between them, dissolving the years of pain. They stepped away from the stone, souls intertwined once more, destined to meet again with love untainted and fate renewed.",
      imageName: "medium.jpg",
      game: "Medium",
    },
    {
      title: "Gambler's Pride",
      content:
        "Long ago, an old man skilled in dice crafted his own weighted set and posted a sign promising one hundred taels of silver to anyone who could beat him. Many confident gamblers tried, but whenever they gained an edge, he’d raise the stakes—five hundred taels if they won, but a hundred lost if they failed. Each time, the old man would shift the odds, leaving his opponents humiliated and penniless. Over time, he amassed a fortune, growing proud and looking down on his challengers. Yet, despite his winnings, who could say he wouldn’t meet his own downfall someday?",
      imageName: "liardice.png",
      game: "Liar's Dice",
    },
    {
      title: "Investigator's Case",
      content:
        "In a quiet town, a wealthy merchant was found dead in his study, a note on his desk reading, “A friend betrayed.” His three closest associates—his business partner, longtime friend, and young apprentice—were all suspected, each with motives of jealousy and greed. The investigator, renowned for his keen intuition, soon uncovered inconsistencies in their alibis, realizing they had conspired together to commit the murder, each believing the others would take the blame. However, their tangled deception unraveled when it was revealed that all three had left their fingerprints on the note, sealing their fate in a web of betrayal.",
      imageName: "deception.png",
      game: "Deception",
    },
    {
      title: "A Horse's Tale",
      content:
        "In a sun-drenched valley, a celebrated racing horse, soared to fame under his devoted trainer. During the championship race, he faced his fiercest rival, and in a desperate final push, he crossed the finish line first. But victory came at a terrible cost; he collapsed on the track, his leg shattered. As the crowd cheered, the trainer abandoned him, drawn to a younger, stronger horse. Once adored, the horse now lay alone and injured, facing the harsh reality that glory often leaves behind a trail of bitterness and betrayal.",
      imageName: "longshot.jpg",
      game: "Long Shot",
    },
    {
      title: "Soul Bells",
      content:
        "On the winding road to the afterlife, spirits carried small bells symbolizing their chance to the afterlife. One curious spirit became attracted by glittering treasures scattered along the path. Unable to resist, he wandered off, dropping his bell as he picked up golden coins and sparkling jewels. Lost in greed, he realized too late that he had strayed from the road. The soft chime of the other spirits faded into the distance, leaving him alone in darkness, understanding the bitter truth: in pursuing fleeting riches, he had forfeited his reborn chance.",
      imageName: "dropolter.jpg",
      game: "Dro Polter",
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
