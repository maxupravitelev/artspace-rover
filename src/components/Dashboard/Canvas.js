import React from 'react'
import useCanvas from '../../hooks/useCanvas'

const Canvas = () => {  
  
  const canvasRef = useCanvas()
  
  return <canvas ref={canvasRef} />
}

export default Canvas

