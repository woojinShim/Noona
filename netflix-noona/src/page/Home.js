import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieAction from "../redux/actions/movieAction";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return <div>Home</div>;
};
