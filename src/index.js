import { StrictMode } from "react";
import ReactDOM from "react-dom";
function Hello() {
  return <p>I am learning React. My life is getting better.</p>;
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Hello />
  </StrictMode>,
  rootElement
);
