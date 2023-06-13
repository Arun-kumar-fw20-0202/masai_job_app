import React from "react";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Flex gap="50px" padding={"10px 20px"} boxShadow={"0 0 10px gray"}>
        <Link to="/">Deshboard</Link>
        <Link to="/add/jobs">Add Job</Link>
      </Flex>
    </>
  );
};
