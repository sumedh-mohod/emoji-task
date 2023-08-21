import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [emoji, setEmoji] = useState("");
  const emojiRef = useRef();
  const emojis = [{ smile: "😊" }, { sad: "🙁" }];

  //  set key value of input
  const emojisSet = (e) => {
    setEmoji(e.target.value);
  };

  // compare key value and gives us emojis after submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    switch (emoji) {
      case ":)":
        emojiRef.current.value = emojis[0].smile;
        break;

      case ":(":
        emojiRef.current.value = emojis[1].sad;
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <form>
        <div>
          <input
            ref={emojiRef}
            type="text"
            placeholder="Search emoji's"
            onChange={(e) => emojisSet(e)}
          />
        </div>
        <div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="btn btn-primary mt-4"
          >
            Search Emoji
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
