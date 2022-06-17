import { Box, Button, Center, FormLabel, Input } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import tasksReducer, { addTask, updateTask } from "../reducers/tasksReducer";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { setModal } from "../reducers/modalReducer";

function AddTask(props: any) {
  let edit = props.edit;
  const dispatch = useDispatch();
  function generateUUID() {
    var d = new Date().getTime();
    var d2 =
      (typeof performance !== "undefined" &&
        performance.now &&
        performance.now() * 1000) ||
      0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }
  const formik = useFormik({
    initialValues: {
      name: edit ? edit.name : "",
    },
    onSubmit: (values) => {
      if (!edit) {
        const data = {
          name: values.name,
          id: generateUUID(),
          status: false,
          pub_date: new Date().toDateString(),
        };
        dispatch(addTask(data));
        dispatch(setModal({ state: false }));
      } else {
        dispatch(updateTask({ ...edit, name: values.name }));
        dispatch(setModal({ state: false }));
      }
    },
  });

  const handleClose = () => {
    dispatch(setModal({ state: false }));
  };

  return (
    <Center
      pos="absolute"
      zIndex={999}
      background={"rgba(0,0,0,0.7)"}
      w="full"
      minH={"90vh"}
      h="full"
    >
      <Box bg="white" rounded={"2xl"} h="72vh" w="96" pos="relative">
        <Button pos="absolute" top="2" right="2" bg="" onClick={handleClose}>
          <CloseIcon />
        </Button>
        <Box px="5" mt="14">
          <form onSubmit={formik.handleSubmit}>
            <FormLabel fontWeight={"bold"}>name</FormLabel>
            <Input
              defaultValue={formik.initialValues.name}
              name="name"
              onChange={formik.handleChange}
            />
            <Button my="2" w="full" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Center>
  );
}

export default AddTask;
