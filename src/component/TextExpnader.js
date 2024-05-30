import { useState } from "react";

export default function TextExpander({
  isExpanded = false,
  collapsedNumberWords = 24,
  textExpandButton = "Show more",
  textCollapseButton = "Show less",
  colorButton = "#7d7ded",
  className = "",
  children,
}) {
  const [expand, setExpand] = useState(isExpanded);
  const displayText = expand
    ? children
    : children.split(" ").slice(0, collapsedNumberWords).join(" ") + "...";
  return (
    <>
      <div className={className}>
        <span>{displayText}</span>
        <button
          type="button"
          onClick={() => setExpand(!expand)}
          style={{
            border: "none",
            font: "inherit",
            background: "transparent",
            color: colorButton,
            marginLeft: "5px",
            display: "inline-block",
          }}
        >
          {expand ? textCollapseButton : textExpandButton}
        </button>
      </div>
    </>
  );
}
