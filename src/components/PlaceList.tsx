import { useSelector, useDispatch } from "react-redux";
import { markVisited } from "../redux/actions";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Slide,
} from "@mui/material";

function PlaceList() {
  const places = useSelector((state: any) => state.places);
  const visited = useSelector((state: any) => state.visited);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={3}>
      {places.map((place: any, i: number) => (
        <Grid item xs={12} sm={6} md={4} key={place.id}>
          <Slide
            in={true}
            direction="up"
            style={{ transitionDelay: i + "00ms" }}
          >
            <Card>
              <CardContent>
                <Typography variant="h5">{place.name}</Typography>
                <img
                  src={place.image}
                  alt={place.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "4px",
                    marginTop: "10px",
                  }}
                />
                <Typography>{place.short_description}</Typography>
                <Button
                  variant={
                    visited.includes(place.id) ? "contained" : "outlined"
                  }
                  onClick={() => dispatch(markVisited(place.id))}
                  sx={{ mt: 2 }}
                >
                  {visited.includes(place.id) ? "Unmark" : "Mark as Visited"}
                </Button>
                <Button
                  component={Link}
                  to={`/place/${place.id}`}
                  sx={{ mt: 2 }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Slide>
        </Grid>
      ))}
    </Grid>
  );
}

export default PlaceList;
