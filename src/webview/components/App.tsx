import * as React from "react";
// import * as Runtime from "./Runtime";

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
  const [runtimes, setRuntimes] = React.useState({});
  const [entities, setEntities] = React.useState({});

  const dataConfig = JSON.parse(state.text);

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
      {Object.keys(runtimes).map((runtime) => (
        <div className="runtime">
          <span>{runtime}</span>
          <div>{JSON.stringify(runtimes[runtime])}</div>
        </div>
      ))}
      <div>
        {Object.keys(entities).map((entity) => (
          <div>{entity}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
