import React from "react";

import CurrenceItem from "./CurrenceItem";

const CurrenceList = ({currence}) => {
    return (
        <div>{currence.map(curr =>
            <CurrenceItem currence={curr} key={curr.name} />
        )}</div>

    )
}
export default CurrenceList