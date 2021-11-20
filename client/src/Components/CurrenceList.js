import React from "react";

import CurrenceItem from "./CurrenceItem";

const CurrenceList = ({ currencies }) => (
  <ol>
    {currencies.map((curr) => (
      <CurrenceItem currence={curr} key={curr.name} />
    ))}
  </ol>
);

export default CurrenceList;
