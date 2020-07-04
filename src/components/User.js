import React, { useState } from "react";

export default function User({ firstname, lastname, status, onClickHandler }) {
  const [stateStatus, setStatus] = useState(status);

  return (
    <div>
      <span onClick={onClickHandler}>{firstname}</span>
      <span>{lastname}</span>
      <span>{stateStatus}</span>
    </div>
  );
}
