import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
var container = document.getElementById("root");
var root = createRoot(container);
root.render( /*#__PURE__*/React.createElement(App, null));