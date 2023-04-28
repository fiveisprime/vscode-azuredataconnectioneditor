import * as React from "react";

/*
"host": {
  "mode": "production",
  "cors": {
    "origins": ["http://localhost:4280"],
    "allow-credentials": false
  },
  "authentication": {
    "provider": "StaticWebApps"
  }
}
*/

const Host = ({ src }) => {
  const [mode, setMode] = React.useState(src.mode);

  return (
    <div>
      <label>
        Mode:
        <input
          type="text"
          name="mode"
          id="mode"
          value={mode}
          onChange={setMode}
        />
      </label>
    </div>
  );
};

export default Host;
