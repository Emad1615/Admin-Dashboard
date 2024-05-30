import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import TitlePage from "./../../component/TitlePage";
import TextExpander from "../../component/TextExpnader";
import BootstrapTextExpander from "../../component/BootstrapTextExpander";
export default function TextExpanderPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box>
        <TitlePage Title={"Text expander component"} />
        <Box className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
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
              Text expander
            </h6>
            <TextExpander>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </TextExpander>
            <hr />
            <TextExpander
              collapsedNumberWords={50}
              textExpandButton="See more"
              textCollapseButton="See less"
              isExpanded={true}
              colorButton={colors.greenAccent[400]}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </TextExpander>
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
              className={`font-semibold text-sm mb-3 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Bootstrap Text Expander
            </h6>
            <BootstrapTextExpander>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </BootstrapTextExpander>
            <hr />
            <BootstrapTextExpander
              textExpandButton="See more"
              textCollapseButton="See less"
              isExpanded={true}
              colorButton={colors.greenAccent[400]}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </BootstrapTextExpander>
          </Box>
        </Box>
      </Box>
    </>
  );
}
