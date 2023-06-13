import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJob } from "../Redux/action";

const jobData = {
  company: "",
  postedAt: "",
  city: "",
  location: "",
  role: "",
  level: "",
  contract: "",
  position: "",
  language: "",
};

export default function AddJob() {
  const [jd, setJd] = useState(jobData);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let val = e.target.value;
    setJd({ ...jd, [e.target.name]: val });
  };
  const handleClick = () => {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    jd.postedAt = `${date}-${month}-${year}`;

    dispatch(addJob(jd));
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={3} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          {/* <Heading fontSize={'4xl'}></Heading> */}
          <Text fontSize={"lg"} color={"gray.600"}>
            Add Your Job ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={6}
        >
          <Stack spacing={3}>
            <FormControl>
              <Flex>
                <FormLabel>Company name</FormLabel>
                <Input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="company"
                />
                <FormLabel>City</FormLabel>
                <Input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="city"
                />
              </Flex>
            </FormControl>
            <FormControl>
              <Flex>
                <FormLabel>Location</FormLabel>
                <Input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="location"
                />
                <FormLabel>Role</FormLabel>
                <Select
                  onChange={(e) => handleChange(e)}
                  name="role"
                  placeholder="Select option"
                >
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="FullStack">FullStack</option>
                </Select>
              </Flex>
            </FormControl>
            <FormControl>
              <Flex>
                <FormLabel>Level</FormLabel>
                <Select
                  onChange={(e) => handleChange(e)}
                  name="level"
                  placeholder="Select option"
                >
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                  {/* <option value="FullStack">FullStack</option> */}
                </Select>
                <FormLabel>Position </FormLabel>
                <Select
                  onChange={(e) => handleChange(e)}
                  name="position"
                  placeholder="Select option"
                >
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="JFD">JFD</option>
                  <option value="Junior Backend Developer">
                    Junior Backend Developer
                  </option>
                  <option value="FSD">FSD</option>
                </Select>
              </Flex>
            </FormControl>
            <FormControl>
              <Flex>
                <FormLabel>Language</FormLabel>
                <Input
                  onChange={(e) => handleChange(e)}
                  name="language"
                  type="text"
                />
                <FormLabel>Contract</FormLabel>
                <Select
                  onChange={(e) => handleChange(e)}
                  name="contract"
                  placeholder="Select Option"
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                </Select>
              </Flex>
            </FormControl>

            <Stack spacing={10}>
              <Button
                onClick={handleClick}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Add
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
