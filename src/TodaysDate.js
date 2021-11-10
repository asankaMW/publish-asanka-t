import React from "react";

const TodaysDate = (props) => <div>{`Today's day and date is ${Date()}`}
<h1>{props.value}</h1>
</div>;

export default TodaysDate;
