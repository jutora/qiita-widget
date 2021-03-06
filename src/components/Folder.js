import React from "react";

export default class Folder extends React.Component {
  render() {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
        style={{width: 12, height: 12, verticalAlign: "middle"}}>
        <path d="M1600 1312v-704q0-40-28-68t-68-28h-704q-40 0-68-28t-28-68v-64q0-40-28-68t-68-28h-320q-40 0-68 28t-28 68v960q0 40 28 68t68 28h1216q40 0 68-28t28-68zm128-704v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z" fill="#999" />
      </svg>
    );
  }
}
