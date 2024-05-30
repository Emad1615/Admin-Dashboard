import { tokens } from "./../theme";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { useState } from "react";
import { content } from "./../data/TabsData";
import TextExpander from "./../component/TextExpnader";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styles from "./../module/Tab.module.css";
export default function TabsComponent({ maxTab = 3, horizontal = true }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div
        className={`flex ${
          horizontal ? "flex-col" : "flex-row"
        } justify-start items-start gap-3`}
      >
        <div
          className={`flex ${
            horizontal ? "flex-row" : "flex-col"
          }  justify-start items-start gap-3`}
        >
          {content.length == maxTab &&
            Array.from({ length: maxTab }, (_, i) => (
              <Tab
                key={i}
                num={i}
                activeTab={activeTab}
                onActiveStat={setActiveTab}
                title={content.at(activeTab).Title}
              />
            ))}
        </div>
        {content.length !== maxTab ? (
          <p>
            Please check your content, content length not equal number of tab
          </p>
        ) : (
          <TabContent
            key={activeTab}
            item={content.at(activeTab)}
            onActiveStat={setActiveTab}
            activeTab={activeTab}
          />
        )}
      </div>
    </>
  );
}
function Tab({ num, activeTab, title, onActiveStat }) {
  return (
    <button
      className={`${
        num === activeTab ? styles.activeButtonTab : styles.buttonTab
      }`}
      type="button"
      onClick={() => onActiveStat(num)}
    >{`${title} ${num + 1} `}</button>
  );
}
function TabContent({ item, activeTab, onActiveStat }) {
  const [likes, setLikes] = useState(item.likes);
  const [seconds, setSeconds] = useState(5);
  return (
    <>
      <div className={styles.tabContent}>
        <h3 className="text-xl font-bold mb-3">{item.summary}</h3>
        <TextExpander collapsedNumberWords={100} className="mb-3">
          {item.details}
        </TextExpander>
        <div className="flex flex-row items-start justify-between mt-14">
          <div className={styles.undoBtnGroup}>
            {activeTab >= 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    onActiveStat((tab) => (tab >= 1 ? tab - 1 : tab))
                  }
                >
                  Undo
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const interval = setInterval(() => {
                      setSeconds((second) => {
                        if (second >= 1) return second - 1;
                        else return clearInterval(interval);
                      });
                    }, 1000);
                    setTimeout(() => {
                      onActiveStat((tab) => (tab >= 1 ? tab - 1 : tab));
                    }, 5000);
                  }}
                >
                  Undo in {`${seconds}s`}
                </button>
              </>
            )}
          </div>
          <div className={styles.likesBtnGroup}>
            <span className="inline-block pr-4">{likes}❣️ Likes</span>
            <button type="button" onClick={() => setLikes((like) => like + 1)}>
              <FavoriteBorderOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
