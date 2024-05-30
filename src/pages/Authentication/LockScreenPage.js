import Auth from "../../component/Auth";
import TextField from "@mui/material/TextField";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";

export default function LockScreenPage() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Auth>
        <Box className={`${smScreen ? "w-2/4 m-auto" : "w-2/3 m-auto"}`}>
          <Box className="mt-20">
            <Box className="mb-6">
              <div className="text-center mb-4">
                <h1 className="text-dark font-bold text-2xl mb-3">
                  Locked Screen
                </h1>

                <div className="text-gray-500 font-semibold text-xs">
                  Enter your password to unlock the screen!
                </div>
              </div>
              <div className="flex flex-row justify-center items-center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pravatar.cc/48?u=499476"
                />
              </div>
            </Box>
            <form>
              <TextField
                sx={{ width: "100%", marginBottom: "20px " }}
                id="password-basic"
                label="password"
                variant="outlined"
                type="password"
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
                Unlock
              </button>
            </form>
          </Box>
        </Box>
      </Auth>
    </>
  );
}
