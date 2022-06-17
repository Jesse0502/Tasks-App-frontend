import * as React from "react";
import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import { connect, Provider } from "react-redux";
import { store } from "./store";

const ParentApp = () => (
  <>
    <Navbar />
    <Tasks />
  </>
);

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <ConnectedComponent />
      </Provider>
    </ChakraProvider>
  );
};

const ConnectedComponent = connect()(ParentApp);
