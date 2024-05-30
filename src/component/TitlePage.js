import { Typography } from "@mui/material";

export default function TitlePage({ Title }) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "18px",
          paddingBottom: "24px",
        }}
      >
        {Title}
      </Typography>
    </>
  );
}
