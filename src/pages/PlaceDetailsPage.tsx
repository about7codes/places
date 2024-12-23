import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaces } from "../redux/actions";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PlaceDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const places = useSelector((state: any) => state.places || []);
  const place = Array.isArray(places)
    ? places.find((p) => p.id === Number(id))
    : null;

  useEffect(() => {
    if (places.length === 0) {
      dispatch(fetchPlaces());
    }
  }, [dispatch, places.length]);

  if (!place) {
    return <div>Loading place details...</div>;
  }

  return (
    <div>
      <>
        <Button
          component={Link}
          to={`/`}
          sx={{ mt: 2 }}
          startIcon={<ArrowBackIcon />}
        >
          Back to Home
        </Button>
        <h1>{place.name}</h1>
        <img src={place.image} alt={place.name} className="placeImg" />
        <p>{place.description}</p>
        <p>{place.description2}</p>
      </>
    </div>
  );
};

export default PlaceDetailsPage;
