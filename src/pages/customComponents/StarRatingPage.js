import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import TitlePage from "./../../component/TitlePage";
import StarRating from "../../component/StarRating";
import { useState } from "react";
export default function StarRatingPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rating, setRating] = useState(0);
  const [ratingMessage, setRatingMessage] = useState("");
  return (
    <>
      <Box>
        <TitlePage Title={"Star rating component"} />
        <Box className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
          <Box
            className="w-full p-3 shadow-md rounded-lg "
            style={{
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : colors.primary[400]
              }`,
            }}
          >
            <h6
              className={`font-semibold text-sm mb-4 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Star rating with number
            </h6>
            <Box>
              <p className="m-1 text-xs">Standard star rating</p>
              <StarRating />
            </Box>
            <hr />
            <Box>
              <p className="m-1 text-xs">With default value</p>
              <StarRating defaultRate={3} />
            </Box>
            <hr />
            <Box>
              <p className="m-1 text-xs">With more stars </p>
              <StarRating maxRate={10} defaultRate={6} />
            </Box>
            <hr />
            <Box>
              <p className="m-1 text-xs">With more stars ,color and size </p>
              <StarRating
                maxRate={10}
                defaultRate={6}
                color={colors.greenAccent[500]}
                size={30}
              />
            </Box>
            <hr />
            <Box>
              <p className="m-1 text-xs">
                With more stars ,color, size and onSetRate{" "}
              </p>
              <StarRating maxRate={10} onRate={setRating} />
              <p className="text-xs m-2">This movie has {rating} star</p>
            </Box>
          </Box>
          <Box
            className="w-full p-3 shadow-md rounded-lg "
            style={{
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : colors.primary[400]
              }`,
            }}
          >
            <h6
              className={`font-semibold text-sm mb-4 ${
                theme.palette.mode === "light" && "text-muted"
              }`}
            >
              Star rating with message
            </h6>
            <Box>
              <p className="m-1 text-xs">Standard star rating</p>
              <StarRating
                message={["Bad", "Okay", "Good", "Very good", "Excellent"]}
              />
            </Box>
            <hr />
            <Box>
              <p className="m-1 text-xs">With default value</p>
              <StarRating
                defaultRate={3}
                message={["Bad", "Okay", "Good", "Very good", "Excellent"]}
              />
            </Box>
            <hr />
            <Box>
              <p className="m-1 text-xs">With more stars </p>
              <StarRating
                maxRate={10}
                defaultRate={6}
                message={[
                  "D",
                  "C-",
                  "C",
                  "C+",
                  "B-",
                  "B",
                  "B+",
                  "A-",
                  "A",
                  "A+",
                ]}
              />
            </Box>
            <hr />
            <Box>
              <p className="m-1 text-xs">With more stars ,color and size </p>
              <StarRating
                maxRate={10}
                defaultRate={6}
                color={colors.blueAccent[500]}
                size={30}
                message={[
                  "D",
                  "C-",
                  "C",
                  "C+",
                  "B-",
                  "B",
                  "B+",
                  "A-",
                  "A",
                  "A+",
                ]}
              />
            </Box>
            <hr />
            <Box>
              <p className="m-1 text-xs">
                With more stars ,color, size and onSetRate
              </p>
              <StarRating
                maxRate={10}
                onRate={setRatingMessage}
                message={[
                  "D",
                  "C-",
                  "C",
                  "C+",
                  "B-",
                  "B",
                  "B+",
                  "A-",
                  "A",
                  "A+",
                ]}
              />
              <p className="text-xs m-2">This movie has {ratingMessage} star</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
