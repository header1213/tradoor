import React from "react";

export default function Suggestions(props) {
  const id = props.match.params.id;
  return <div>Suggestions {id}</div>;
}
