import io from "socket.io-client";
// import { SOCKET_URL } from "config";

import store from '../store'
import {  setSteeringDirections } from '../reducers/directionsReducer'


const KEY_LEFT_ARROW = 37
const KEY_UP_ARROW = 38
const KEY_RIGHT_ARROW = 39
const KEY_DOWN_ARROW = 40

const left_direction = -1
const neutral_direction = 0
const right_direction = 1

let socket = null

let power_fired = false
let steering_fired = false


const initSocket = (socketUrl) => {
    socket = io(socketUrl)
    return socket
}


const steerRoverPress = (direction) => {
    if (power_fired == false) {
        power_fired = true

        if ((direction == 'upButton') || (direction == KEY_UP_ARROW)) {
            console.log('forward')
            let direction = 1
            let power = 40
            socket.emit('power', [power, direction])
        }
        if ((direction == 'downButton') || (direction == KEY_DOWN_ARROW)) {
            console.log('backward')
            let direction = -1
            let power = 40
            socket.emit('power', [power, direction])
        }
    }
    if (steering_fired == false) {
        steering_fired = true
        if ((direction == 'leftButton') || (direction == KEY_LEFT_ARROW)) {
            console.log('left')
            socket.emit('steer', left_direction)
        }
        if ((direction == 'rightButton') || (direction == KEY_RIGHT_ARROW)) {
            console.log('right')
            socket.emit('steer', right_direction)
        }
    }
}

const steerRoverRelease = async (direction) => {
    if ((direction == 'upButton') || (direction == KEY_UP_ARROW)) {
        let direction = 0
        let power = 0
        socket.emit('power', [power, direction])
        power_fired = false
    }
    if ((direction == 'downButton') || (direction == KEY_DOWN_ARROW)) {
        console.log('backward')
        let direction = 0
        let power = 0
        socket.emit('power', [power, direction])
        power_fired = false

    }
    if (((direction == 'leftButton') || (direction == KEY_LEFT_ARROW)) || ((direction == 'rightButton') || (direction == KEY_RIGHT_ARROW))) {
        steering_fired = false
        await socket.emit('steer', neutral_direction, (currentSteeringDirectionInBackend) => {
            store.dispatch(setSteeringDirections( currentSteeringDirectionInBackend ))
            })
    }
}

export default { initSocket, steerRoverPress, steerRoverRelease }


// const SOCKET_URL = 'http://192.168.178.50:6475/'

// export const socket = io(SOCKET_URL)