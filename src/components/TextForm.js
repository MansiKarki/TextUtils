import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // Convert to Uppercase
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  // Convert to Lowercase
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };

  // Clear text
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "warning");
  };

  // Copy text
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  // Remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ").trim();
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  // Capitalize first letter of each word
  const handleCapitalize = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Text capitalized", "success");
  };

  // Handle change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Word count logic
  const wordCount = text.trim() === ""
    ? 0
    : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-dark mx-2 mb-2" onClick={handleUpClick} disabled={!text}>
          Uppercase
        </button>

        <button className="btn btn-dark mx-2 mb-2" onClick={handleLowClick} disabled={!text}>
          Lowercase
        </button>

        <button className="btn btn-dark mx-2 mb-2" onClick={handleCapitalize} disabled={!text}>
          Capitalize
        </button>

        <button className="btn btn-dark mx-2 mb-2" onClick={handleExtraSpaces} disabled={!text}>
          Remove Spaces
        </button>

        <button className="btn btn-dark mx-2 mb-2" onClick={handleCopyClick} disabled={!text}>
          Copy
        </button>

        <button className="btn btn-dark mx-2 mb-2" onClick={handleClearClick} disabled={!text}>
          Clear
        </button>
      </div>

      <div className="container mt-4">
        <h2>Your Text Summary</h2>
        <p>
          <strong>{wordCount}</strong> words and{" "}
          <strong>{text.length}</strong> characters
        </p>
        <p>
          <strong>{(0.008 * wordCount).toFixed(2)}</strong> minutes read
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview 😅"}</p>
      </div>
    </>
  );
}
