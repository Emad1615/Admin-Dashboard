import Auth from "../../component/Auth";
import TextField from "@mui/material/TextField";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function RecoverPasswordPage() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Auth>
        <Box className={`${smScreen ? "w-2/4 m-auto" : "w-2/3 m-auto"}`}>
          <Box className="mt-20">
            <Box className="mb-10">
              <div className="text-center mb-4">
                <h1 className="text-dark font-bold text-2xl mb-3">
                  Reset Password
                </h1>

                <div className="text-gray-500 font-semibold text-xs">
                  Reset your Password with Farida.
                </div>
              </div>
              <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
                <Collapse in={isOpen}>
                  <Alert
                    variant="outlined"
                    severity="warning"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    Enter your Email and instructions will be sent to you!
                  </Alert>
                </Collapse>
              </div>
            </Box>
            <form>
              <TextField
                sx={{ width: "100%", marginBottom: "20px " }}
                id="email-basic"
                label="Email"
                variant="outlined"
                required
              />
              <button
                className="btn btn-block btn-md btn-success w-full mt-6"
                style={{
                  backgroundColor: "#0b2948",
                  color: "white",
                  border: "none",
                }}
              >
                Send email
              </button>
            </form>
          </Box>
        </Box>
      </Auth>
    </>
  );
}
