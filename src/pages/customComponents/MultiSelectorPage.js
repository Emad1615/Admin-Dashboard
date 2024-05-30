import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import TitlePage from "./../../component/TitlePage";
import MultipleSelector from "../../component/MultipleSelector";
import { useState } from "react";
export default function MultiSelectorPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const Ndata = [
    { id: 1, name: "selector 1" },
    { id: 2, name: "selector 2" },
    { id: 3, name: "selector 3" },
    { id: 4, name: "selector 4" },
    { id: 5, name: "selector 5" },
    { id: 6, name: "selector 6" },
    { id: 9, name: "selector 9" },
    { id: 10, name: "selector 10" },
  ];
  const SData = [
    { id: 7, name: "selector 7" },
    { id: 8, name: "selector 8" },
  ];
  const [nonSelectData, setNonSelectData] = useState(Ndata);
  const [selectData, setSelectData] = useState([]);

  const [nonSelectDataS, setNonSelectDataS] = useState(Ndata);
  const [selectDataS, setSelectDataS] = useState(SData);
  return (
    <>
      <Box>
        <TitlePage Title={"Multi selector component"} />
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
              Multi selector with non selected data
            </h6>
            <MultipleSelector
              nonSelectedData={nonSelectData}
              SelectedData={selectData}
              onNonSelect={setNonSelectData}
              onSelect={setSelectData}
            />
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
              Multi selector with selected data
            </h6>
            <MultipleSelector
              nonSelectedData={nonSelectDataS}
              SelectedData={selectDataS}
              onNonSelect={setNonSelectDataS}
              onSelect={setSelectDataS}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
