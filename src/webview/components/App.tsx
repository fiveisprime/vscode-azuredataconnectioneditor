import * as React from "react";

import Runtime from "./Runtime";
import Entity from "./Entity";
import Host from "./Host";

interface vscode {
  postMessage(message: any): void;
}

declare const vscode: vscode;
declare const state: any;

const sendMessage = () => {
  console.log("button clicked");
  vscode.postMessage({ command: "testing" });
};

const App = () => {
  const dataConfig = JSON.parse(state.text);
  const [runtimes, setRuntimes] = React.useState({});
  const [entities, setEntities] = React.useState({});

  React.useEffect(() => {
    setEntities(dataConfig.entities);
    setRuntimes(dataConfig.runtime);

    window.addEventListener("message", (event) => {
      const message = event.data;
      switch (message.command) {
        case "refactor":
          break;
      }
    });
  });

  return (
    <div>
      <h1>Runtimes</h1>
      {Object.keys(runtimes).map((runtime) =>
        runtime === "host" ? (
          <Host src={runtimes[runtime]} />
        ) : (
          <Runtime name={runtime} src={runtimes[runtime]} />
        )
      )}
      <h1>Entities</h1>
      {Object.keys(entities).map((entity) => (
        <Entity name={entity} src={entities[entity]} />
      ))}
    </div>
  );
};

export default App;
