import { FaRegCheckCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
export const ProgressStatsData = [
  {
    backgroundColor: "#0ac074",
    Icon: FaRegCheckCircle,
    State: "Completed",
    PercentageState: 70,
  },
  {
    backgroundColor: "#fcb92c",
    Icon: FaCalendarAlt,
    State: "Pending",
    PercentageState: 45,
  },
  {
    backgroundColor: "#ff3d60",
    Icon: FaRegTimesCircle,
    State: "Cancel",
    PercentageState: 19,
  },
];
