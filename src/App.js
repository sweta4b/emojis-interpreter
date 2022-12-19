import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  smile: "😊",
  sad: "😔",
  happy: "😀",
  anger: "😠",
  confused: "😕",
  love: "❤️",
  panda: "🐼 ",
  cake: "🎂",
  drink: "🍹",
  run: "🏃"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "sorry, its not in our data";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input
        placeholder="find the emoji by name"
        onChange={inputChangeHandler}
      ></input>
      <h2>{meaning}</h2>

      <h3>emoji we know</h3>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
