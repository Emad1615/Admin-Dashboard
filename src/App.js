import { useEffect } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { MyProSidebarProvider } from "./context/SidebarContext";
import { Route, Routes } from "react-router-dom";
import MyNavbar from "./component/Navbar/MyNavbar";
import WebFontLoader from "webfontloader";
import webFont from "webfontloader";
import { routes } from "./routes-config";
import LoginPage from "./pages/Authentication/LoginPage";
import MainLayout from "./pages/MainLayout";
import RegisterPage from "./pages/Authentication/RegisterPage";
import RecoverPasswordPage from "./pages/Authentication/RecoverPasswordPage";
import LockScreenPage from "./pages/Authentication/LockScreenPage";
import MaintenancePage from "./pages/utility/MaintenancePage";
import Error404 from "./pages/utility/Error404";
import Error500 from "./pages/utility/Error500";
import ComingSoonPage from "./pages/utility/ComingSoonPage";

export default function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Poppins"],
      },
    });
  }, []);
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/recoverpassword" element={<RecoverPasswordPage />} />
            <Route path="/lockscreen" element={<LockScreenPage />} />
            <Route path="/maintenancepage" element={<MaintenancePage />} />
            <Route path="/error404" element={<Error404 />} />
            <Route path="/error500" element={<Error500 />} />
            <Route path="/comingsoon" element={<ComingSoonPage />} />

            <Route
              path="*"
              element={
                <MainLayout>
                  <MyProSidebarProvider>
                    <div style={{ height: "100%", width: "100%" }}>
                      <main>
                        <MyNavbar />
                        <div className="p-4">
                          <Routes>
                            {routes.map((route, idx) => (
                              <Route
                                key={idx}
                                path={route.path}
                                element={<route.component />}
                                index={route.Index}
                              />
                            ))}
                          </Routes>
                        </div>
                      </main>
                    </div>
                  </MyProSidebarProvider>
                </MainLayout>
              }
            />
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
