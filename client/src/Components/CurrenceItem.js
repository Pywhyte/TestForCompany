import React from "react";

const CurrenceItem = ({ currence: { name = "" } = {} }) => <li>{name}</li>;

export default CurrenceItem;
