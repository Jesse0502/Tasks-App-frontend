import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import AddTask from "./AddTask";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../reducers/modalReducer";
function Navbar(props: any) {
  const modalSelector = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(setModal({ state: true, edit: false }));
  };

  return (
    <>
      <Flex
        justify={"space-between"}
        px="3"
        alignItems="center"
        bg="blue.500"
        h="16"
      >
        <Heading color="white">Task Tracker</Heading>
        <Button color="blue.500" bg="white" onClick={handleOpen}>
          Add Task
        </Button>
      </Flex>
      {modalSelector.state && <AddTask edit={modalSelector.edit} />}
    </>
  );
}

export default Navbar;
