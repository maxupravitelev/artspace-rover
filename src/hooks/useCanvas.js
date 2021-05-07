import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'


const useCanvas = () => {

  const canvasRef = useRef(null)
  let steeringDirection = useSelector((state) => state.directions.steeringDirection)

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.canvas.width = 40
    context.canvas.height = 40

    context.fillStyle = '#000000'

    let x_up = 20 + steeringDirection
    let y_up = 0
    let x_low = 20 - steeringDirection
    let y_low = 90

    context.moveTo(x_up, y_up);
    context.lineTo(x_low, y_low)

    context.lineWidth = 5

    context.strokeStyle = '#000000'
    context.stroke()

  }, [steeringDirection])

  return canvasRef

}
export default useCanvas

// Tutorial for handling canvas in react: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258