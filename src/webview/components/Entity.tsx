import * as React from "react";

/*
"Person": {
  "source": "dbo.MyTestPersonTable",
  "permissions": [
    {
      "actions": ["create", "read", "update", "delete"],
      "role": "anonymous"
    }
  ]
}
*/

const Entity = ({ src, name }) => {
  const [entitySource, setEntitySource] = React.useState(src.source);

  return (
    <div>
      <p>{name}</p>
      <label>
        Source:
        <input
          type="text"
          name="source"
          id="source"
          value={entitySource}
          onChange={setEntitySource}
        />
      </label>
    </div>
  );
};

export default Entity;
