import React from "react";

export default function SearchResults(props) {
  const q = props.match.params.q;
  return <div>SearchResults {q}</div>;
}
