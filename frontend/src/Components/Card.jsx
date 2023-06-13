import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Button,
  Heading,
  Text,
  CardFooter,
  Flex,
  Box,
  Tag,
} from "@chakra-ui/react";

export const JobCard = ({
  postedAt,
  city,
  location,
  role,
  level,
  contract,
  position,
  language,
  company,
}) => {
  return (
    <>
      <Flex align={"center"} justify={"center"} gap="30px" p="10px 20px">
        <Stack width="80%">
          <Card
            p="20px 30px"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            width="100%"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              height={"150px"}
              width="150px"
              borderRadius={"50%"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGtDTgr23ZNVPYuAm4IqmyzMXDkT3IybM_Q&usqp=CAU"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Text size="md" color="teal">
                  {company}
                </Text>
                <Heading as="h2" size="1xl">
                  {position}
                </Heading>
                <Flex justify="space-between" gap="50px" width={"100%"}>
                  <Box>
                    <Flex gap="20px">
                      <Tag>{postedAt}</Tag>
                      <Tag>{contract}</Tag>
                      <Tag>{location}</Tag>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex gap="20px">
                      <Tag>{role}</Tag>
                      <Tag>{level}</Tag>
                      <Tag>{language}</Tag>
                      {/* <span>{}</span> */}
                    </Flex>
                  </Box>
                </Flex>
              </CardBody>
            </Stack>
          </Card>
        </Stack>
      </Flex>
    </>
  );
};
