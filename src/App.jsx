import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import UnauthorizedPage from "./components/common/UnauthorizedPage";
import MainPage from "./MainPage";
import GetStory from "./components/GetStory";
import LoginRegister from "./components/LoginRegister";
import MiddlePage from "./components/MiddlePage";
import Register from "./components/Register";
import Rule from "./components/Rules";
function App() {
  const userId = "671380c7735f09a4ddcbe906";
  const rules = [
    {
      title: "The Sanzu River",
      content:
        "Each player will be given 4 sticky tentacles. On the table, there will be target cards. Players must throw their tentacles at the victim cards to catch them, ensuring the tentacles stick (similar to claw machine). Rewards are based on the number of victims they successfully catch. ",
      imageName: "stickycthulhu.png",
      game: "Sticky Cthulhu",
    },
    {
      title: "The Yaoguai's Cave",
      content:
        "Each player selects a hero to enter the dungeon. Before entering, they can purchase equipment for their hero by paying a fee. Players will draw encounter cards for monsters until they choose to stop or until their hero perishes in the dungeon. The number of coins they collect is based on the number and type of monsters they defeat. ",
      imageName: "dungeonmandom.png",
      game: "Dungeon of Mandom VIII",
    },
    {
      title: "The Three-Life Stone",
      content:
        "A standard game of Medium where two players cooperate to guess words based on psychic clues.",
      imageName: "medium.jpg",
      game: "Medium",
    },
    {
      title: "Gambler's Pride",
      content:
        "Each player rolls 5 dice and hides the results from others. The first player announces a face value and a number of dice they believe all players combined have (e.g., “3 ones”). The next player must either “Believe” and increase the value or quantity, or “Doubt.” If they doubt, all players reveal their dice. If the total number of dice meets or exceeds the claim, the doubter loses a die permanently. If it is exactly the claim, the doubter loses two dice. If it is fewer than the claim, the player who made the claim loses one die. The game continues until a player loses all dice. When only two players remain, the game shifts to predicting the total value of all remaining dice. ",
      imageName: "liardice.png",
      game: "Liar's Dice",
    },
    {
      title: "Investigator's Case",
      content:
        "A mini version of the game Deception. Roles include 1 Witness, 1 Serial Killer, 2/3 Investigators, and 1 Forensic Scientist (who acts as the game master). Each player has 3 pairs of murder weapons and evidence. Players have 5 minutes to deduce who the killer is, following the standard rules of Deception. ",
      imageName: "deception.png",
      game: "Deception",
    },
    {
      title: "A Horse's Tale",
      content:
        "The game is held every 15-30 minutes. Before the game starts, players use tokens for a bet on a horse they believe will win. Each player receives a betting confirmation slip marked with the event’s logo to prevent counterfeit slips. Players can enjoy other games while waiting for the race to begin. Only the horse-pulling-horse rule is used, and the rest of the game is simplified to maintain clarity and ease of play. ",
      imageName: "longshot.jpg",
      game: "Long Shot",
    },
    {
      title: "Soul Bells",
      content:
        "Players are given 5 bells to play over 3 rounds, each with increasing difficulty based on a drawn card. The more bells they manage to keep standing after 3 rounds, the higher their reward. Bells that fall are added to a communal pot, and any player who completes all rounds without losing a bell wins the pot. ",
      imageName: "dropolter.jpg",
      game: "Dro Polter",
    },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login/:purpose/:storyNo" element={<LoginRegister />} />
        <Route
          path="/main-page/:userId"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path="/401" element={<UnauthorizedPage />} />
        <Route path="/get-story/:userId/:storyNo" element={<GetStory />} />
        <Route path="/middle-page/:purpose/:storyNo" element={<MiddlePage />} />
        <Route path="/register/:purpose/:storyNo" element={<Register />} />
        <Route path="/rule" element={<Rule stories={rules} />} />
      </Routes>
    </Router>
  );
}

export default App;
