import { useSelector } from "react-redux";
import { Backdrop, Box, Button, Fade, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import InsightsIcon from "@mui/icons-material/AutoAwesome";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";

function FunFeature() {
  const places = useSelector((state: any) => state.places);

  const [open, setOpen] = useState(false);
  const [randomPlace, setRandomPlace] = useState<any>();

  const handleOpen = () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    setRandomPlace(places[randomIndex]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "40px",
        }}
      >
        <Button
          variant="contained"
          onClick={handleOpen}
          endIcon={<InsightsIcon />}
          sx={{ flexShrink: 0 }}
        >
          Suggest a Place
        </Button>
        <Button
          component={Link}
          to={`/visited`}
          variant="contained"
          sx={{
            flexShrink: 0,
            textDecoration: "none",
            color: "white",
            "&:hover": {
              color: "white",
            },
          }}
          endIcon={<ModeOfTravelIcon />}
        >
          My Visited Places
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              width: "400px",
            }}
          >
            {randomPlace && (
              <>
                <Typography variant="h5">{randomPlace.name}</Typography>
                <img
                  src={randomPlace.image}
                  alt={randomPlace.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "4px",
                    marginTop: "10px",
                  }}
                />
                <Typography>{randomPlace.short_description}...</Typography>
                <Button
                  component={Link}
                  to={`/place/${randomPlace.id}`}
                  sx={{ mt: 2 }}
                >
                  View Details
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClose}
                  sx={{ mt: 2 }}
                >
                  Close
                </Button>
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default FunFeature;
