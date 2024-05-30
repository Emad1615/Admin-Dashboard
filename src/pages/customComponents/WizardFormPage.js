import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import TitlePage from "./../../component/TitlePage";
import { useNavigatorGeolocation } from "../../customHooks/useNavigatorGeolocation";
import WizardFormComponent from "../../component/wizardFormComponent/WizardFormComponent";
export default function WizardFormPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box>
        <TitlePage Title={"Wizard form component"} />
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
              Wizard form
            </h6>
            <WizardFormComponent />
          </Box>
        </Box>
      </Box>
    </>
  );
}
