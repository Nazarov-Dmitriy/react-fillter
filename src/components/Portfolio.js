import React from "react";

export default function Portfolio(props) {
  const { items } = props;
  return (
    <div className="container">
      {items.map((item, index) => (
        <div className="item" key={index}>
          <img src={item.img} alt={item.category} />
        </div>
      ))}
    </div>
  );
}
