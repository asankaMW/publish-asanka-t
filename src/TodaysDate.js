import React from "react";

const TodaysDate = (props) => <div>{`Today's date is ${Date()}`}
<h1>{props.value}</h1>
</div>;

export default TodaysDate;
