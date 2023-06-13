import React, { useEffect, useState } from "react";
import { JobCard } from "../Components/Card";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getJob } from "../Redux/action";
import { Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  function getData() {
    setIsloading(true);
    axios
      .get("http://localhost:8080/job")
      .then((res) => {
        setData(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? <Heading>Loading...</Heading> : ""}

      {data.map((ele) => (
        <JobCard {...ele} key={ele._id} />
      ))}
    </>
  );
};
