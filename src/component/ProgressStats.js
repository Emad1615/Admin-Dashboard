import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { FaRegCheckCircle } from "react-icons/fa";
import { Box } from "@mui/material";

export default function ProgressStats({
  backgroundColor,
  Icon,
  State,
  PercentageState,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: `${backgroundColor}`,
    },
  }));
  return (
    <>
      <Box className="flex flex-row items-start justify-start gap-2 m-2">
        <Box className="flex-grow-0">
          <Icon
            className="m-2 text-3xl p-2 rounded-xl w-10 h-10"
            style={{
              color: "#0bb197",
              backgroundColor: colors.primary[400],
            }}
          />
        </Box>
        <Box className="flex-grow-1 pt-2">
          <label
            className={`text-xs inline-block pb-1 ${
              theme.palette.mode === "light" && "text-muted"
            }`}
          >
            {State}
          </label>
          <BorderLinearProgress variant="determinate" value={PercentageState} />
        </Box>
      </Box>
    </>
  );
}
