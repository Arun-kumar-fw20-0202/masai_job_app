import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex gap="50px" padding={"10px 20px"} boxShadow={"0 0 10px gray"}>
        <Link to="/">Deshboard</Link>
        <Link to="/add/jobs">Add Job</Link>
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          aria-label="Toggle dark mode"
        />
      </Flex>
    </>
  );
};
