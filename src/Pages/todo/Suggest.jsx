import React from "react";

export default function Suggest(props) {
  const id = props.match.params.id;
  return <main>Suggest {id}</main>;
}
