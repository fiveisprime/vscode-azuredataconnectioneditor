import * as React from "react";

const Runtime = ({ name, src }) => {
  const [checked, setChecked] = React.useState(!!src.enabled);

  const toggleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className="runtime">
      <label>
        {name}:
        <input type="checkbox" checked={checked} onChange={toggleCheck} />
      </label>
    </div>
  );
};

export default Runtime;
