import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
export default function ComingSoonPage() {
  return (
    <Box
      className="h-screen"
      sx={{
        backgroundImage: "url(/assets/Images/comingSoon.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "end",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <div className="absolute top-3 left-3  ">
        <Alert severity="success" color="info">
          Responsive MUI - Farida Admin Dashboard
        </Alert>
      </div>
      <Box className="text-center p-4">
        <div>
          <img
            alt="profile user"
            width="75px"
            height="75px"
            src={
              process.env.PUBLIC_URL +
              "assets/Images/FaridaLogos/Farida-logos_white.png"
            }
            style={{
              cursor: "pointer",
              borderRadius: "50%",
              margin: "auto",
              display: "block",
              backgroundColor: "#0b2948",
            }}
          />
        </div>
        <h3 className=" text-2xl font-bold">
          Let's get started with Farida admin dashboard
        </h3>
        <h6 className="text-muted font-semibold text-sm">
          It will be as simple as Occidental in fact it will be Occidental.
        </h6>
        <button
          className="btn btn-sm btn-outline-primary "
          style={{ padding: "2px 25px" }}
        >
          Back to Home
        </button>
      </Box>
    </Box>
  );
}
