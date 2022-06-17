import { Center, Heading, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { fetchTasks } from "../reducers/tasksReducer";
import { useEffect } from "react";

function Tasks() {
  const tasksSelector = useSelector((state: any) => state.tasks.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  return (
    <Center flexDir={"column"}>
      <Heading my="1" fontFamily={"cursive"}>
        Tasks
      </Heading>
      {tasksSelector &&
        tasksSelector.map((task: any, index: number) => (
          <Task task={task} id={index} key={index} />
        ))}
      {!tasksSelector.length && (
        <>
          <Heading mt="4" textAlign={"left"} opacity={0.5}>
            Nothing to see here...
          </Heading>
        </>
      )}
    </Center>
  );
}

export default Tasks;
