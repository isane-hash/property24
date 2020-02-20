import React from "react";

import PropertyProvider from "../context/PropertyContext";
import Propeties from "../containers/Properties";
export default function PropertyList() {
  return (
    <PropertyProvider>
      <Propeties />
    </PropertyProvider>
  );
}
