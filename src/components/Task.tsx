import { Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { AddIcon, CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../reducers/tasksReducer";
import AddTask from "./AddTask";
import { setModal } from "../reducers/modalReducer";

function Task(props: any) {
  let task = props.task;
  let id = props.id;
  let dispatch = useDispatch();
  const changeStatus = () => {
    dispatch(updateTask({ ...task, status: true }));
  };
  const deleteTask = () => {
    dispatch(removeTask(task.id));
  };
  const handleEdit = () => {
    dispatch(setModal({ state: true, edit: { ...task } }));
  };
  return (
    <>
      <Flex
        borderBottom="4px"
        borderColor={task.status === true ? "green" : "red"}
        p="3"
        my="5"
        alignItems="flex-end"
        flexDir={"column"}
        justifyContent="center"
        w="50vw"
      >
        <HStack w="full">
          <Heading px="1" flex={1} fontSize={"2xl"}>
            {id + 1}
          </Heading>
          <Text flex="12" w="full" textAlign={"left"} fontFamily={"fantasy"}>
            {task.name}
          </Text>
          {!task.status && (
            <>
              <Button color="green" mx="2" onClick={changeStatus}>
                <CheckIcon />
              </Button>
              <Button color="blue" mx="2" onClick={handleEdit}>
                <EditIcon />
              </Button>
            </>
          )}
          <Button color="red" mx="2" onClick={deleteTask}>
            <DeleteIcon />
          </Button>
        </HStack>
      </Flex>
    </>
  );
}

export default Task;
