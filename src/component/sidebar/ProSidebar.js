import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  MenuItemStyles,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { useState } from "react";
import { Typography, Box, IconButton, Badge, hexToRgb } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuIntlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useSidebarContext } from "../../context/SidebarContext";
import PeopleIcon from "@mui/icons-material/People";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";
import LockIcon from "@mui/icons-material/Lock";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import ScreenLockRotationOutlinedIcon from "@mui/icons-material/ScreenLockRotationOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import StackedLineChartOutlinedIcon from "@mui/icons-material/StackedLineChartOutlined";
import WaterfallChartOutlinedIcon from "@mui/icons-material/WaterfallChartOutlined";
import PagesIcon from "@mui/icons-material/Pages";
import WebIcon from "@mui/icons-material/Web";
import EngineeringIcon from "@mui/icons-material/Engineering";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import QuizIcon from "@mui/icons-material/Quiz";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ErrorIcon from "@mui/icons-material/Error";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import TabOutlinedIcon from "@mui/icons-material/TabOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: `${theme.palette.mode == "dark" ? colors.grey[100] : "#8ba1b7"}`,
        fontWeight: "bold !important",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "12px",
          fontWeight: "400",
        }}
      >
        {title}
      </Typography>
    </MenuItem>
  );
};

export default function MyProSidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, setSidebarRTL, sidebarImage, isExpanded, setIsExpanded } =
    useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
          // color: "#59d0ff !important",
        },
        "& .menu-item": {
          backgroundColor: "transparent !important",
          fontWeight: "bold",
          color: `${
            theme.palette.mode == "dark" ? colors.grey[100] : "#8ba1b7"
          }`,
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="sm"
        rtl={sidebarRTL}
        backgroundColor={`${
          theme.palette.mode == "dark" ? colors.primary[400] : "#0b2948"
        }`}
        // image={sidebarImage}
        image="assets/Images/"
        defaultCollapsed={isExpanded}
      >
        <Menu iconshape="square">
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon
                  onClick={() => {
                    setIsExpanded(!isExpanded);
                    collapseSidebar();
                  }}
                  style={{
                    color: `${
                      theme.palette.mode == "dark"
                        ? colors.grey[100]
                        : "#8ba1b7"
                    }`,
                  }}
                />
              ) : sidebarRTL ? (
                <SwipeLeftIcon onClick={() => setSidebarRTL(!sidebarRTL)} />
              ) : (
                <SwipeRightIcon
                  onClick={() => setSidebarRTL(!sidebarRTL)}
                  style={{
                    color: `${
                      theme.palette.mode == "dark"
                        ? colors.grey[100]
                        : "#8ba1b7"
                    }`,
                  }}
                />
              )
            }
            style={{
              margin: "10px 0 0px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}></Typography>
                <IconButton
                  // onClick={
                  //   broken ? () => toggleSidebar() : () => collapseSidebar()
                  // }
                  onClick={() => {
                    broken ? toggleSidebar() : collapseSidebar();
                    setIsExpanded(!isExpanded);
                  }}
                >
                  {/* <CloseOutlinedIcon /> */}
                  <LockIcon
                    style={{
                      color: `${
                        theme.palette.mode == "dark"
                          ? colors.grey[100]
                          : "#8ba1b7"
                      }`,
                    }}
                  />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  "& .avater-image": {
                    backgroundColor: colors.primary[500],
                  },
                }}
              >
                <img
                  // className="avater-image"
                  alt="profile user"
                  width="75px"
                  height="75px"
                  src={
                    process.env.PUBLIC_URL +
                    "assets/Images/FaridaLogos/Farida-logos_white.png"
                  }
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
            </Box>
          )}
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
              style={{
                fontWeight: "500",
                fontSize: "11px",
                color: `${
                  theme.palette.mode == "dark" ? colors.grey[100] : "#8ba1b7"
                }`,
              }}
            >
              {!collapsed && "Data visualization"}
            </Typography>
            <SubMenuItem label={"Charts"} icon={<BarChartOutlinedIcon />}>
              <Item
                title="Apex Charts"
                to="/apexpage"
                icon={<StackedLineChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Devextreme Charts"
                to="/expresspage"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Chartjs Charts"
                to="/reactchartjspage"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Re Charts"
                to="/rechartspage"
                icon={<WaterfallChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenuItem>

            <Typography
              variant="h6"
              style={{
                fontWeight: "500",
                fontSize: "11px",
                color: `${
                  theme.palette.mode === "dark" ? colors.grey[100] : "#8ba1b7"
                }`,
              }}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              {!collapsed && "Pages"}
            </Typography>

            <SubMenuItem
              label={"Authentication"}
              icon={<ManageAccountsOutlinedIcon />}
            >
              <Item
                title="Login"
                to="/login"
                icon={<LoginOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Register"
                to="/register"
                icon={<HowToRegOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Recover Password"
                to="/recoverpassword"
                icon={<PasswordOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Lock Screen"
                to="/lockscreen"
                icon={<ScreenLockRotationOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenuItem>

            <SubMenuItem label={"Utility"} icon={<PagesIcon />}>
              <Item
                title="Starter Page"
                to="/starterpage"
                icon={<WebIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Maintenance"
                to="/maintenancepage"
                icon={<EngineeringIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Coming Soon"
                to="/comingsoon"
                icon={<UpcomingIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Timeline"
                to="/lockscreen"
                icon={<ViewTimelineIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQs"
                to="/lockscreen"
                icon={<QuizIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pricing"
                to="/lockscreen"
                icon={<CreditCardIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Error 404"
                to="/error404"
                icon={<ErrorIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Error 500"
                to="/error500"
                icon={<ErrorIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenuItem>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
              style={{
                fontWeight: "500",
                fontSize: "11px",
                color: `${
                  theme.palette.mode == "dark" ? colors.grey[100] : "#8ba1b7"
                }`,
              }}
            >
              {!collapsed && "COMPONENTS"}
            </Typography>
            <SubMenuItem label={"More Components"} icon={<AppsOutlinedIcon />}>
              <Item
                title="Text Expander"
                to="/textExpanderpage"
                icon={<VisibilityOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Star Rating"
                to="/starratingpage"
                icon={<StarOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Tabs"
                to="/tabspage"
                icon={<TabOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Multi selector"
                to="/multiselectorpage"
                icon={<DoneAllOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Wizard form "
                to="/wizardformpage"
                icon={<ContactEmergencyOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenuItem>

            {!broken && (
              <Box
                className={`${sidebarRTL ? "" : "left-0"}`}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "fixed",
                  bottom: 0,
                  width: `${collapsed ? "80px" : "250px"}`,
                  backgroundColor: `${
                    theme.palette.mode === "light" ? "#051628" : "#0d0f12"
                  }`,
                  height: "50px",
                  transition: "width .3s",
                }}
              >
                <Box
                  style={{
                    margin: "10px 0 0px 0",
                    color: colors.grey[100],
                  }}
                >
                  {collapsed ? (
                    <IconButton onClick={() => collapseSidebar()}>
                      <MenuOutlinedIcon
                        style={{
                          color: `${
                            theme.palette.mode == "dark"
                              ? colors.grey[100]
                              : "#8ba1b7"
                          }`,
                        }}
                      />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={
                        broken ? () => toggleSidebar() : () => collapseSidebar()
                      }
                    >
                      <LockIcon
                        style={{
                          color: `${
                            theme.palette.mode == "dark"
                              ? colors.grey[100]
                              : "#8ba1b7"
                          }`,
                        }}
                      />
                    </IconButton>
                  )}
                </Box>
              </Box>
            )}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}
function SubMenuItem({ label, icon, children }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <SubMenu
      label={label}
      icon={icon}
      style={{ fontSize: "12px", fontWeight: "400" }}
    >
      <Box
        backgroundColor={`${
          theme.palette.mode == "light" ? "#0b2948" : "#191c23"
        }`}
      >
        {children}
      </Box>
    </SubMenu>
  );
}
