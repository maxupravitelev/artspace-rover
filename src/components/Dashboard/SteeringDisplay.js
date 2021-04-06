import React from 'react'

import { useSelector } from 'react-redux'
import Canvas from './Canvas'

const SteeringDispay = ({  }) => {
  // const [motorDirection, setMotorDirection] = useState(null)

  let steeringDirection = useSelector((state) => state.directions.steeringDirection)

  let displaySteeringDirection = "|"

  if (steeringDirection != 0) {
    displaySteeringDirection = "/"
  }

  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2*Math.PI)

    // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)

    ctx.fill()
  }

  return (
    <div className="app">
        {displaySteeringDirection}
        <Canvas draw={draw} />
    </div>
  )
}

export default SteeringDispay
