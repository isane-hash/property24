import React from "react";

const Property = ({ property }) => {
  const { name, number, street, beds, baths, price } = property;
  return (
    <div className="property">
      <h3>{name}</h3>
      <p>
        {number} {street}
      </p>
      <p>Beds: {beds}</p>
      <p>Baths: {baths}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default Property;
