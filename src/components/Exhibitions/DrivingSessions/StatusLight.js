import React from 'react'

const StatusLight = ({}) => {

  const style = {
    backgroundColor: "green",
    borderRadius: "50%",
    height: "1em",
    width: "1em",
    display: "inline-block"
  }


  return (
    <div>
      <span style={style}></span>
    </div>
  )
}

export default StatusLight