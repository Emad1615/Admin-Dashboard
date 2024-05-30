import { Box, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import {
  FcAssistant,
  FcBearish,
  FcContacts,
  FcGlobe,
  FcReddit,
  FcGoogle,
} from "react-icons/fc";
import { AppData } from "./../../data/AppData";
export default function AppMenu({ AMenu, openAMenu, handleCloseAMenu }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={AMenu}
        open={openAMenu}
        onClose={handleCloseAMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            width: "320px",
            height: "auto",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box
          className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-1 p-3"
          sx={{ height: "auto", overflowY: "auto" }}
        >
          {AppData.map((data) => (
            <div key={data.ID}>
              <MenuItem
                onClick={handleCloseAMenu}
                sx={{
                  justifyContent: "center",
                  fontSize: "30px",
                  padding: "15px 5px",
                  border: "1px solid transparent",
                  borderRadius: "5px",
                  transition: "all .3s",
                  "&:hover": {
                    backgroundColor: "transparent",
                    border: `1px solid ${
                      theme.palette.mode === "light"
                        ? colors.grey[900]
                        : colors.grey[700]
                    }`,
                    borderRadius: "5px",
                  },
                }}
              >
                {data.Icon}
              </MenuItem>
            </div>
          ))}
        </Box>
      </Menu>
    </>
  );
}
