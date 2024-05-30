import React, { useState } from "react";
import { useContext } from "react";
import { tokens, ColorModeContext } from "../../theme";
import { useTheme, Box, IconButton, InputBase, Drawer } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useProSidebar } from "react-pro-sidebar";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import NotificationMenu from "../notificationMenu/NotificationMenu";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { screen } from "@testing-library/react";
import AppsIcon from "@mui/icons-material/Apps";
import AppMenu from "../notificationMenu/AppMenu";
export default function MyNavbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { toggleSidebar, broken, rtl } = useProSidebar();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [NotiMenu, setNotiMenu] = useState(null);
  const openNotiMenu = Boolean(NotiMenu);
  const handleClickNotiMenu = (event) => {
    setNotiMenu(event.currentTarget);
  };
  const handleCloseNotiMenu = () => {
    setNotiMenu(null);
  };
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(!openDrawer);
  };
  const toggleFullSceen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  const [AMenu, setAMenu] = useState(null);
  const openAMenu = Boolean(AMenu);
  const handleClickAMenu = (event) => {
    setAMenu(event.currentTarget);
  };
  const handleCloseAMenu = () => {
    setAMenu(null);
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      className="shadow-sm"
      sx={{
        // position: "sticky",
        // top: 0,
        // display: "flex",
        // zIndex: 10000,
        backgroundColor: `${
          theme.palette.mode === "light" ? "white" : colors.primary[400]
        }`,
      }}
    >
      <Box display="flex">
        {broken && !rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          p={0.2}
          borderRadius={1}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <Tooltip title="App">
          <IconButton
            aria-controls={openAMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openAMenu ? "true" : undefined}
            onClick={handleClickAMenu}
          >
            <AppsIcon />
          </IconButton>
        </Tooltip>
        <AppMenu
          AMenu={AMenu}
          openAMenu={openAMenu}
          handleCloseAMenu={handleCloseAMenu}
        />

        <Tooltip title="Full Screen">
          <IconButton
            onClick={(event) => {
              toggleFullSceen();
            }}
          >
            <FullscreenIcon />
          </IconButton>
        </Tooltip>
        <IconButton onClick={toggleDrawer(openDrawer)}>
          <SettingsOutlinedIcon />
        </IconButton>
        <Drawer
          anchor={"bottom"}
          open={openDrawer}
          onClose={toggleDrawer(openDrawer)}
          sx={{
            zIndex: "99999 !important",
          }}
        >
          <Box className="p-10">
            <h3>Drawer Context</h3>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it? It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
          </Box>
        </Drawer>
        <Tooltip title="Notifications">
          <IconButton
            aria-controls={openNotiMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openNotiMenu ? "true" : undefined}
            onClick={handleClickNotiMenu}
          >
            <NotificationsOutlinedIcon />
          </IconButton>
        </Tooltip>
        <NotificationMenu
          NotiMenu={NotiMenu}
          openNotiMenu={openNotiMenu}
          handleCloseNotiMenu={handleCloseNotiMenu}
        />
        <Tooltip title="Account settings">
          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{
                ml: 2,
              }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                src={
                  "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                }
                sx={{ width: 32, height: 32 }}
              >
                M
              </Avatar>
            </IconButton>
            {!broken && (
              <span
                className="pl-1"
                style={{ fontFamily: "Poppins", fontSize: "13px" }}
              >
                Emad Ismail{" "}
              </span>
            )}
          </Box>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
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
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
        {broken && rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}
