import React from 'react';

const horizontal = {
  height: 1,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#bbbbbb",
};

const span = {
  fontSize: 14,
  paddingLeft: 10,
  paddingRight: 10,
  color: "#696969",
  background: 'white'
}

const CustomDivider = () => {
  return (
    <div style={horizontal}>
      <span style={span}> or </span>
    </div>
  )
}

export default CustomDivider
