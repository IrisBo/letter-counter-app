import { useState } from "react";

export function CharsCounter() {
  const [inputValue, setInputValue] = useState("");
  const [emoji, setEmoji] = useState("");
  const [imgHidden, SetImageHidden] = useState(true);
  

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
      SetImageHidden(false)
    }
    else if (nameValue === "happy") {
      setEmoji("😊");
    } 
    
    else {
      setEmoji(""); // Reset emoji if nameValue is not "idan"
      SetImageHidden(true)
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
      <img width="48px" height="48 px" hidden={imgHidden} className="devil-pic" src="../src/assets/devil.jpg" />
    </div>
  );
}

export default CharsCounter;
