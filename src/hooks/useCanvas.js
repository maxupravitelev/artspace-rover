import { useRef, useEffect } from 'react'

const useCanvas = (draw, options={}) => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    // context.canvas.width = 100
    // context.canvas.height = 100
    // context.fillStyle = '#EEEEEE'
    // context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    context.fillStyle = '#000000'
    context.beginPath()
    context.arc(50, 100, 20, 0, 2*Math.PI)
    context.fill()
 
  }, [draw])


//     const canvas = canvasRef.current
//     const context = canvas.getContext(options.context || '2d')
    
//     let frameCount = 0
//     let animationFrameId

//     const render = () => {
//       frameCount++
//       draw(context, frameCount)
//       animationFrameId = window.requestAnimationFrame(render)
//     }

//     render()

//     return () => {
//       window.cancelAnimationFrame(animationFrameId)
//     }
//   }, [draw])

  return canvasRef

}
export default useCanvas

// Source for handling canvas in react: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258