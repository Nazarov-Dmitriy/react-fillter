import React from "react";

export default function Toolbar(props) {
  const { filters, handleClickSelected, selected } = props;


  const handleClickCategory = () => {
    props.handleClickCategory(props.items)
  };



  props.onSelectFilter(selected);
  return (
    <ul className="toolbar">
      {filters.map((item) => (
        <li onClick={(evt)=>{handleClickSelected(evt);handleClickCategory(props.items)}} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
