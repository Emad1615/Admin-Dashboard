import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
export default function Error500() {
  return (
    <Box
      className="h-screen"
      sx={{
        backgroundImage: "url(/assets/Images/Error500.jpg)",
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
        <h3 className=" text-2xl font-bold">INTERNAL SERVER ERROR</h3>
        <h6 className="text-muted font-semibold text-sm">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
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
