import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/index.scss";

const rootContainer = document.getElementById("page-root");
if (rootContainer) {
  const root = createRoot(rootContainer);
  root.render(createElement(App));
}
