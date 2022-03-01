import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GlobalStyle } from "./styles/globalStyles";

ReactDOM.render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>,
  document.getElementById("root")
);
