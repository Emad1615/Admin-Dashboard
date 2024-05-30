import { createContext, useContext, useState } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import MyProSidebar from "../component/sidebar/ProSidebar";
import { useTheme } from "@mui/material";
import { token } from "../theme";
import useLocalStorage from "./../utilities/useLocalStorage";

const SidebarContext = createContext({});

export const MyProSidebarProvider = ({ children }) => {
  const [sidebarRTL, setSidebarRTL] = useLocalStorage("SidebarRTL", false);
  const [sidebarBackgroundColor, setSidebarBackgroundColor] =
    useState(undefined);
  const [sidebarImage, setSidebarImage] = useState(undefined);
  const [isExpanded, setIsExpanded] = useLocalStorage("Expanded", true);

  return (
    <ProSidebarProvider>
      <SidebarContext.Provider
        value={{
          sidebarBackgroundColor,
          setSidebarBackgroundColor,

          sidebarImage,
          setSidebarImage,

          sidebarRTL,
          setSidebarRTL,
          isExpanded,
          setIsExpanded,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: sidebarRTL ? "row-reverse" : "row",
          }}
        >
          <MyProSidebar />
          {children}
        </div>
      </SidebarContext.Provider>
    </ProSidebarProvider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
