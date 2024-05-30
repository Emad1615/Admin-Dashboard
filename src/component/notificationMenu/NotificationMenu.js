import { Avatar, Box, Menu, MenuItem } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { NotificationData } from "../../data/NotificationData";
export default function NotificationMenu({
  NotiMenu,
  openNotiMenu,
  handleCloseNotiMenu,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={NotiMenu}
        open={openNotiMenu}
        onClose={handleCloseNotiMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            width: "320px",
            height: "320px",
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
        <div className="flex justify-between items-start w-100 p-2">
          <div>
            <h6 className="font-sans" style={{ fontSize: ".875rem" }}>
              Notifications
            </h6>
          </div>
          <div>
            <a
              href="#"
              target="_blank"
              className="no-underline font-sans"
              style={{ color: colors.greenAccent[400] }}
            >
              View All
            </a>
          </div>
        </div>
        <Box sx={{ height: "221px", overflowY: "auto" }}>
          {NotificationData.map((data) => (
            <div key={data.ID}>
              <MenuItem
                onClick={handleCloseNotiMenu}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  gap: "6px",
                }}
              >
                <div>
                  <Avatar sx={{ width: 32, height: 32 }} src={data.imageSrc}>
                    M
                  </Avatar>
                </div>
                <div style={{ whiteSpace: "break-spaces" }}>
                  <h6 style={{ fontSize: "13px" }} className="font-sans m-0">
                    {data.Title}
                  </h6>
                  <p
                    className="font-sans m-1"
                    style={{
                      fontSize: "11px",
                      color: `${
                        theme.palette.mode != "dark" ? colors.grey[700] : ""
                      }`,
                    }}
                  >
                    {data.Body}
                  </p>

                  <span
                    className=" font-sans"
                    style={{
                      fontSize: "10px",
                      color: `${
                        theme.palette.mode != "dark" ? colors.grey[700] : ""
                      }`,
                    }}
                  >
                    <AccessTimeIcon sx={{ fontSize: "12px" }} /> {data.Time}
                  </span>
                </div>
              </MenuItem>
            </div>
          ))}
        </Box>

        <Box
          className="shadow-inner "
          sx={{
            position: "fixed",
            width: "100%",
            height: "50px",
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: 100000,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            backgroundColor: colors.primary[400],
          }}
        >
          <a
            href="#"
            target="_blank"
            className="no-underline font-sans"
            style={{ color: colors.greenAccent[400] }}
          >
            <ArrowCircleRightIcon
              style={{ fontSize: "16px" }}
              className="mr-2"
            />
            View More..
          </a>
        </Box>
      </Menu>
    </>
  );
}
