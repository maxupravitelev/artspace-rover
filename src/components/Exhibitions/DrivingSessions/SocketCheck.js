import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'

import { setSocket } from '../../../reducers/socketReducer'


// return header component
const SocketCheck = () => {

  const dispatch = useDispatch()

  let exhibitions = useSelector((state) => state.exhibitions)

  // let baseUrl = useSelector((state) => state.urls.baseUrl)
  let baseUrl = exhibitions[0].rovers[0].roverUrl
  
  // let socketUrl = baseUrl += ':6475'
  let socketUrl = baseUrl

  // useEffect(() => {
    
  //   dispatch(setSocket(socketUrl))
  
  // }, [dispatch])

  let socket = useSelector((state) => state.socket)

  console.log(socket.length)




  if (socket.length == 0) {
    console.log("socket init")
    dispatch(setSocket(socketUrl))
    return <div></div>
  }


  if (!socket.connected) return <div>socket to rover is not connected, please contact admin</div>
  else {
    console.log("socket connection successfully established")
    return <div></div>}
}

export default SocketCheck


