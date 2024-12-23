import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPlaces } from "../redux/actions";
import PlaceList from "../components/PlaceList";
import FunFeature from "../components/FunFeature";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  return (
    <div>
      <h1>Historical Places</h1>
      <FunFeature />
      <PlaceList />
    </div>
  );
};

export default HomePage;
