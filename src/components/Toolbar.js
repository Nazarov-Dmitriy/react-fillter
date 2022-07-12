import React from "react";

export default function Toolbar(props) {
  const { filters } = props;

  const getClasses = (category) => {
    return props.selected === category ? "selected" : "";
  };

  // props.onSelectFilter(props.selected);
  return (
    <ul className="toolbar">
      {filters.map((item) => (
        <li
          onClick={() => props.selectCategory(item)}
          key={item}
          className={getClasses(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
