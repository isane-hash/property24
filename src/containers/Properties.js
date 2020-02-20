import React, { useContext } from "react";

import { PropertyContext } from "../context/PropertyContext";
import Property from "../components/Property";

const Propeties = () => {
  const { properties } = useContext(PropertyContext);
  console.log(properties);
  return (
    <div className="properties">
      {properties.map(property => {
        return <Property key={property.id} property={property} />;
      })}
    </div>
  );
};

export default Propeties;
