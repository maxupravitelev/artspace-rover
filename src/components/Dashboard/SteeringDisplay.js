import React from 'react'

import { useSelector } from 'react-redux'


const SteeringDispay = ({  }) => {
  // const [motorDirection, setMotorDirection] = useState(null)

  let steeringDirection = useSelector((state) => state.directions.steeringDirection)

  let displaySteeringDirection = "|"

  if (steeringDirection != 0) {
    displaySteeringDirection = "/"
  }

  return (
    <div className="app">
        {displaySteeringDirection}
    </div>
  )
}

export default SteeringDispay
