import Auth from "../../component/Auth";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import RedditIcon from "@mui/icons-material/Reddit";
import { FcGoogle, FcReddit } from "react-icons/fc";
import TextFieldPassword from "../../component/TextFieldPassword";

// const CheckerStyle = {
//   height: "5px",
//   borderRadius: "5px",
//   backgroundColor: "#dbdfe9",
//   width: "100%",
// };
// const ChckerCheckedStyle = {
//   backgroundColor: "#ec5447",
//   height: "5px",
//   borderRadius: "5px",
//   width: "100%",
// };

export default function RegisterPage() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(null);
  return (
    <>
      <Auth>
        <Box className={`${smScreen ? "w-2/4 m-auto" : "w-2/3 m-auto"}`}>
          <Box className="mt-20">
            <Box>
              <div className="text-center mb-4">
                <h1 className="text-dark font-bold text-2xl mb-3">Sign Up</h1>

                <div className="text-gray-500 font-semibold text-xs">
                  Your Social Campaigns
                </div>
              </div>
              <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <Button
                  variant="outlined"
                  startIcon={<FcGoogle />}
                  className="text-muted m-1"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  Sign in with Google
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<FcReddit />}
                  className="text-muted m-1"
                  sx={{ fontWeight: "bold" }}
                  color="primary"
                >
                  Sign in with Reddit
                </Button>
              </div>
              <div className="text-gray-500 font-semibold text-xs text-center m-4">
                Or with email
              </div>
            </Box>
            <form>
              <TextField
                sx={{ width: "100%", marginBottom: "20px " }}
                id="email-basic"
                label="Email"
                variant="outlined"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
              <TextFieldPassword
                password={password}
                setPassword={setPassword}
              />
              <TextField
                sx={{ width: "100%" }}
                id="repeat-password-basic"
                label="Repeat password"
                variant="outlined"
                required
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.currentTarget.value);
                  if (e.currentTarget.value !== password) setIsConfirmed(false);
                  else setIsConfirmed(true);
                  console.log(isConfirmed);
                  console.log(confirmPassword);
                }}
              />
              {isConfirmed === false && (
                <span className="text-danger">
                  The password and its confirm are not the same
                </span>
              )}
              <div className="text-muted font-medium text-right">
                <a
                  href="/auth-recoverpw"
                  className="no-underline "
                  style={{ color: "#0b2948" }}
                >
                  Forgot your password?
                </a>
              </div>
              <button
                className="btn btn-block btn-md btn-success w-full mt-6"
                style={{
                  backgroundColor: "#0b2948",
                  color: "white",
                  border: "none",
                }}
              >
                Sign up
              </button>
            </form>
            <div className="text-gray-500 text-center font-medium mt-10">
              Already have an Account?
              <a href="#" className="link-primary no-underline">
                Sign in
              </a>
            </div>
          </Box>
        </Box>
      </Auth>
    </>
  );
}
