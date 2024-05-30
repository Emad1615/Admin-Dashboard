import { Box, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "./../theme";

export default function Auth({ children }) {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("md"));
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box>
        {smScreen ? (
          <>
            <Box className="grid lg:grid-cols-2 md:grid-cols-2">
              <Box
                sx={{
                  backgroundColor: "#f3f6f9",
                }}
              >
                {children}
              </Box>
              <Box
                sx={{
                  backgroundImage:
                    "url(assets/Images/pexels-kei-scampa-3303491.jpg)",
                  height: "100vh",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "relative",
                }}
              >
                <Box
                  position={"absolute"}
                  top={"10px"}
                  right={"10px"}
                  textAlign={"center"}
                >
                  <img
                    alt="profile user"
                    width="85px"
                    height="85px"
                    src={
                      process.env.PUBLIC_URL +
                      "assets/Images/FaridaLogos/Farida-logos_white.png"
                    }
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box position={"absolute"} bottom={"50px"} textAlign={"center"}>
                  <Box
                    width={"70%"}
                    margin={"auto"}
                    sx={{
                      backgroundColor: "#00000080",
                      padding: "15px",
                      borderRadius: "15px",
                    }}
                  >
                    <h3 className="font-semibold text-white text-xl">
                      Fast, Efficient and Productive
                    </h3>
                    <p className="font-medium text-white text-sm">
                      In this kind of post, the blogger introduces a person
                      they’ve interviewed and provides some background
                      information about the interviewee and their work following
                      this is a transcript of the interview.
                    </p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              backgroundColor: "#f3f6f9",
              height: "100vh",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#031f20",
                height: "200px",
              }}
            >
              <img
                alt="logo site"
                style={{
                  width: "200px",
                  height: "200px",
                  display: "block",
                  margin: "auto",
                }}
                src={
                  process.env.PUBLIC_URL +
                  "assets/Images/FaridaLogos/Farida-logos_white.png"
                }
              />
            </Box>
            <Box>{children}</Box>
          </Box>
        )}
      </Box>
    </>
  );
}
