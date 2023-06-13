import React, { useEffect } from "react";
import { JobCard } from "../Components/Card";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getJob } from "../Redux/action";
import { Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const store = useSelector((store) => {
    return store && store;
  }, shallowEqual);

  console.log(store.jobs);

  useEffect(() => {
    dispatch(getJob);
  }, []);

  return (
    <>
      <Heading>Loading...</Heading>
      <JobCard key={""} />;
    </>
  );
};
