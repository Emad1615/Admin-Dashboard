import styles from "./../module/MultiSelector.module.css";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import { useState } from "react";
export default function MultipleSelector({
  nonSelectedData,
  SelectedData,
  onNonSelect,
  onSelect,
}) {
  function HandleSelectedItem(item) {
    const nonSelected = nonSelectedData.filter((x) => x !== item);
    const selected = [...SelectedData, item];
    onNonSelect(nonSelected.sort((a, b) => a.id - b.id));
    onSelect(selected.sort((a, b) => a.id - b.id));
  }
  function HandleNonSelectedItem(item) {
    const Selected = SelectedData.filter((x) => x !== item);
    const NonSelected = [...nonSelectedData, item];
    onNonSelect(NonSelected.sort((a, b) => a.id - b.id));
    onSelect(Selected.sort((a, b) => a.id - b.id));
  }
  function HandleSelectAll() {
    const selected = [...SelectedData, ...nonSelectedData];
    const nonSelected = [];
    onNonSelect(nonSelected.sort((a, b) => a.id - b.id));
    onSelect(selected.sort((a, b) => a.id - b.id));
  }
  function HandleDeselectAll() {
    const selected = [];
    const nonSelected = [...nonSelectedData, ...SelectedData];
    onNonSelect(nonSelected.sort((a, b) => a.id - b.id));
    onSelect(selected.sort((a, b) => a.id - b.id));
  }
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-3">
        <ul className={styles.multiSelector}>
          {nonSelectedData?.map((data) => (
            <li
              key={data.id}
              onClick={() => {
                HandleSelectedItem(data);
              }}
            >
              {data.name}
            </li>
          ))}
        </ul>
        <div
          className={`flex flex-col justify-center items-center gap-3 ${styles.multiSelectorbtnGroup}`}
        >
          <button
            onClick={() => {
              HandleSelectAll();
            }}
          >
            <KeyboardDoubleArrowRightOutlinedIcon />
          </button>
          <button
            onClick={() => {
              HandleDeselectAll();
            }}
          >
            <KeyboardDoubleArrowLeftOutlinedIcon />
          </button>
        </div>
        <ul className={styles.multiSelector}>
          {SelectedData?.map((data) => (
            <li
              key={data.id}
              onClick={() => {
                HandleNonSelectedItem(data);
              }}
            >
              {data.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
