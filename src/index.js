import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  theme,
} from "@chakra-ui/react";
import { SpeechProvider } from "@speechly/react-client";
import { TodoContextProvider } from "./context";

import { Provider } from "./context/context";

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.pink,
  },
});

ReactDOM.render(
  <SpeechProvider appId="058ad9f4-07d8-4933-8653-06ae62957839" language="en-US">
    <Provider>
      <TodoContextProvider>
        <React.StrictMode>
          <ChakraProvider theme={customTheme}>
            <ColorModeScript
              initialColorMode={customTheme.config.initialColorMode}
            />
            <App />
          </ChakraProvider>
        </React.StrictMode>
      </TodoContextProvider>
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
