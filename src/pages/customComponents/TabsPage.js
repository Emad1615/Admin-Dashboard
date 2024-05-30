import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import TitlePage from "./../../component/TitlePage";
import TabsComponent from "../../component/TabsComponent";
export default function TabsPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box>
        <TitlePage Title={"Tab component"} />
        <Box className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-3">
          <Box
            className="w-full p-3 shadow-md rounded-lg "
            style={{
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : colors.primary[400]
              }`,
            }}
          >
            <h6
              className={`font-semibold text-sm mb-4 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Horizontal Tab
            </h6>
            <TabsComponent maxTab={4} />
          </Box>
          <Box
            className="w-full p-3 shadow-md rounded-lg "
            style={{
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : colors.primary[400]
              }`,
            }}
          >
            <h6
              className={`font-semibold text-sm mb-4 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Vertical Tab
            </h6>
            <TabsComponent maxTab={4} horizontal={false} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
