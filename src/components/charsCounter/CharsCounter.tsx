import { useState } from "react";

export function CharsCounter() {
  const [inputValue, setInputValue] = useState("");
  const [emoji, setEmoji] = useState("");

  // Function to handle input change
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
    changeEmojy(event.target.value);
    return event.target.value;
  };

  const countLetters = () => {
    return inputValue.length;
  };
  const changeEmojy = (nameValue: any) => {
    if (nameValue === "idan") {
      setEmoji("😈"); // Set emoji to the desired value
    }
    else if (nameValue === "happy") {
      setEmoji("😊");
    } 
    
    else {
      setEmoji(""); // Reset emoji if nameValue is not "idan"
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="write something"
      ></input>
      <p>Number of letters: {countLetters()} </p>
      <p>{emoji}</p>
    </div>
  );
}

export default CharsCounter;
