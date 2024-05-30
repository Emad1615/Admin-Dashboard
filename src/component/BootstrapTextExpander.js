import { useState } from "react";

export default function BootstrapTextExpander({
  isExpanded = false,
  textExpandButton = "Show more",
  textCollapseButton = "Show less",
  colorButton = "#7d7ded",
  className = "",
  children,
}) {
  const [expand, setExpand] = useState(isExpanded);
  return (
    <>
      <div className={className}>
        <span
          className={`${!expand ? "d-inline-block text-truncate" : ""}`}
          style={{ width: "500px", lineHeight: "1" }}
        >
          {children}
        </span>
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
            fontSize: "13px",
          }}
        >
          {expand ? textCollapseButton : textExpandButton}
        </button>
      </div>
    </>
  );
}
